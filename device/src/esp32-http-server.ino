#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <uri/UriBraces.h>

#define WIFI_SSID "Wokwi-GUEST"
#define WIFI_PASSWORD ""
// Defining the WiFi channel speeds up the connection:
#define WIFI_CHANNEL 6

WebServer server(80);

const int LED1 = 26;
const int LED2 = 27;

bool led1State = false;
bool led2State = false;

void setup(void)
{
  Serial.begin(115200);
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD, WIFI_CHANNEL);
  Serial.print("Connecting to WiFi ");
  Serial.print(WIFI_SSID);
  // Wait for connection
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(100);
    Serial.print(".");
  }
  Serial.println(" Connected!");

  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  server.on("/", HTTP_GET, []()
            {
    Serial.println("Hello endpoint hit!");
    server.send(200, "text/plain", "Hello, world!"); });

  server.on(UriBraces("/toggle/{}"), []()
            {
              String led = server.pathArg(0);
              Serial.print("Toggle LED #");
              Serial.println(led);
              switch (led.toInt())
              {
              case 1:
                led1State = !led1State;
                digitalWrite(LED1, led1State);
                server.send(200, "application/json", "{\"message\": \"success\", \"bulb\":" + String(led1State) + "}");
                break;
              case 2:
                led2State = !led2State;
                digitalWrite(LED2, led2State);
                server.send(200, "application/json", "{\"message\": \"success\", \"bulb\":" + String(led2State) + "}");
                break;
              default:
                server.send(500, "application/json", "{\"message\": \"error\"}");
              } });

  server.on("/html", HTTP_GET, []()
            {
    Serial.println("ESP32 Web Server: New request received:");  // for debugging
    Serial.println("GET /");        // for debugging
    server.send(200, "text/html", "<html><body><h1>Hello, ESP32!</h1></body></html>"); });

  server.on("/status", HTTP_POST, []()
            {
    if (!server.hasArg("plain")) { // Check if body received
      server.send(400, "text/plain", "Body not received");
      return;
    }
    String message = server.arg("plain"); // Get the body
    Serial.println("Message received: " + message);
    server.send(200, "text/plain", "Message received: " + message); });

  server.onNotFound([]()
                    { server.send(200, "text/plain", "notFound"); });

  server.begin();
  Serial.println("HTTP server started (http://localhost:8180)");
}

void loop(void)
{
  Serial.begin(115200);
  server.handleClient();
  delay(2);
}
