
# OLA UNO

<img width="860" alt="11" src="https://github.com/moshdev2213/Ola-Uno/assets/103739510/afe981d8-fbc1-49bd-92ae-dd7e217dc690">

## Description

OLA UNO is an IoT project designed to facilitate hands-on learning in the field of Internet of Things (IoT) 🌐. The project utilizes an ESP32 microcontroller board 🤖, known for its versatility and capabilities in IoT applications. Two LEDs 💡💡 are integrated into the setup, which are controlled via an Express server 🖥️.

The architecture involves a client-server model where a React-based client interface 📱 communicates with the Express server. Through HTTP protocol 🌐, React sends commands to the Express server, which in turn interacts with the ESP32 device 🤖 to toggle the LEDs on and off 💡🔄 based on user input. This setup not only demonstrates basic IoT functionalities like remote control and data exchange but also provides a practical example of integrating hardware, server-side logic, and frontend development in IoT projects 🚀.

## API Enpoints

| API           | EndPoint           | Description                                |
| :------------ | :----------------- | :----------------------------------------- |
| `Check Server`| `/`                | Checks server status. 🚀                   |
| `Send Data`   | `/send-data`       | Sends data to the ESP32. 📤                |
| `Trigger Bulb A`| `/triggerBulbA`  | Toggles Bulb A on the ESP32. 💡            |
| `Trigger Bulb B`| `/triggerBulbB`  | Toggles Bulb B on the ESP32. 💡            |
| `Get HTML`    | `/get-html`        | Retrieves HTML content. 🌐                 |
| `Get Status`  | `/get-status`      | Retrieves the status from the ESP32. 📝    |
| `Say Hello`   | `/say-hello`       | Sends a hello message to the ESP32. 👋     |


## Checking GateWay Status

| Status | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `Online` | `200` | **server Online** |

```javascript
{
    "message": "server Online"
}
```