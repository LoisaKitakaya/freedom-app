---
title: A Telegram Bot Using Webhooks
description: This is a sample tutorial on how to create a Telegram bot using webhooks.
date: '2023-07-19'
categories:
  - python
  - flask
published: true
---

#### Table of Contents

# Building a Telegram Bot with Webhooks in Python using Flask

## Introduction

In this tutorial, we will explore the process of creating a Telegram bot using webhooks. Our implementation will be based on the Python programming language, utilizing the [Flask](https://flask.palletsprojects.com/en/2.3.x/) framework. Prior to diving into the coding aspect, let's establish a clear understanding of Telegram, bots, and webhooks.

**Understanding Telegram**

Telegram is a cloud-based instant messaging application and communication platform that facilitates various functionalities such as text messaging, voice and video calls, multimedia file sharing, and group chats.

**Exploring Bots**

In the realm of technology and software, a bot (short for robot) refers to a program or script capable of performing automated tasks or engaging in conversations with users. Bots are engineered to mimic human behavior and can execute diverse functions, including providing information, answering queries, executing actions, and aiding in tasks.

**Unveiling Webhooks**

Webhooks serve as a communication mechanism or method employed in web development and application integration. They enable real-time data transmission from one application to another as soon as a specific event or trigger occurs. Instead of continually polling for updates, webhooks allow applications to receive data or notifications seamlessly.

Now, let's proceed with the implementation. 👨‍💻

## Creating A Flask Application

Now, let's proceed with creating our Flask application. Follow these steps to set up the project folder and create a virtual environment to isolate the Python packages:

Open the terminal and navigate to the desired location for your project.

```bash
# create a project folder

mkdir telegram-bot

# move into the project folder

cd telegram-bot
```

Create a virtual environment to ensure the installed Python packages remain separate from the system-wide packages.

```bash
# create a virtual environment for our python project

python -m venv .env # for linux and mac

python -m venv env # for windows

# activate the virtual environment

source .env/bin/activate # for linux & mac

env\Scripts\activate # for windows
```

With the virtual environment activated, install Flask using pip.

```bash
# install flask

pip install Flask
```

With Flask installed, we can now write a basic Flask application that will serve as the foundation for our Telegram bot. Create a file named `main.py` and include the following code:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "<p>Hello, World!</p>"
```

Here's an overview of what's happening in this code snippet:

- We import the Flask class, which will serve as the foundation for our application.

- We create an instance of the Flask class, with `__name__` representing the current module or package. This enables Flask to locate resources like templates and static files.

- Using the `route()` decorator, we specify the URL that will trigger the associated function.

- The function `hello_world()` returns the message to be displayed in the user's browser. By default, the content type is HTML, so any HTML within the string will be rendered by the browser.

To run the application, you can use the `flask` command or `python -m flask`. Make sure to provide the path to your application using the `--app` option:

```bash
flask --app main run

# alternatively, run the app in debug mode

flask --app main run --debug
```

> _By enabling debug mode, the server will automatically reload if code changes, and will show an interactive debugger in the browser if an error occurs during a request._

Congratulations! Your Flask application is now up and running. Next, let's delve into Telegram and Telegram Bots. 😎

## Telegram and Telegram Bots

> _Before we proceed with this tutorial, please ensure that you have a Telegram account._

Creating Telegram bots is incredibly straightforward, although some knowledge of **computer programming** is required.

Telegram simplifies bot creation through its Bot API, which provides the necessary tools and framework to integrate your code. To get started, you'll need to message [@BotFather](https://t.me/botfather) on Telegram to register your bot and obtain its authentication token.

The **token** will resemble something like `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`.

> _NOTE: Your bot token serves as its unique identifier. Ensure you store it securely and only share it with authorized individuals who require direct access to the bot. Anyone possessing the token will have full control over your bot._

All requests made to the [Telegram Bot API](https://core.telegram.org/bots/api) must be transmitted over `HTTPS` and follow this format: `https://api.telegram.org/bot<token>/METHOD_NAME`.

To test your bot, simply copy the following URL into your browser's search bar and hit enter:

`https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11/getMe`

> NOTE: Remember to replace the token in the URL with your bot's actual token.

As a response, you will receive a `JSON` object that resembles the following:

```json
{
	"ok": true,
	"result": {
		"id": 6374744248,
		"is_bot": true,
		"first_name": "GIF BOT",
		"username": "thee_gif_bot",
		"can_join_groups": true,
		"can_read_all_group_messages": false,
		"supports_inline_queries": false
	}
}
```

If the value of the `ok` field is `true`, it signifies that your bot is functioning correctly. At this point, we are ready to add some functionality to our bot.

Now, let's take a momentary pause from Telegram and proceed to create our webhook.

## Creating A Webhook

To set up a webhook, we will modify our Flask application to define an endpoint that Telegram can use to update us whenever our bot receives a new message.

Update the `main.py` file with the following code:

```python
import json
from flask import Flask, Response, request

app = Flask(__name__)


@app.route("/telegram_bot/", methods=["POST"])
def telegram_bot():
    callback = request.json

    with open("response.json", "w") as response_file:
        json.dump(callback, response_file)

    return Response("ok", 200)
```

Now, let's go through what this piece of code does:

- `@app.route("/telegram_bot/", methods=["POST"])` This decorator indicates that the function `telegram_bot()` should be executed when an HTTP POST request is made to the `/telegram_bot/` endpoint.

- `callback = request.json` This line extracts the `JSON` payload from the request object provided by Flask.

- `with open("response.json", "w") as response_file` This line opens a file named `response.json` in write mode. The `with` statement ensures that the file is properly closed after writing to it.

- `json.dump(callback, response_file)` This line converts the `callback` dictionary to a `JSON` string and writes it to the file.

- `return Response("ok", 200)` After handling the request and writing the `callback` to the file, the function returns a response. In this case, it returns the string "**ok**" as the response body and the `HTTP` status code `200` to indicate a successful response.

> _NOTE: It's essential to return a status code of 200 back to the Telegram server because if the server doesn't receive a success status code, it assumes that we did not receive the data, and it will keep spamming our application with data._

Now that we have our webhook defined in the Flask application, we need to make it accessible to Telegram.

To achieve this, we will use the `setWebhook` method provided by the [Telegram Bot API](https://core.telegram.org/bots/api). This method allows us to specify a `URL` and receive incoming updates via our outgoing webhook.

However, we encounter an issue. Since our application is running locally, we cannot provide `http://127.0.0.1:5000/telegram_bot/` as the webhook URL to Telegram. The Telegram server won't be able to send us updates, nor will we be able to receive them.

To resolve this, we'll employ a tool called [Ngrok](https://ngrok.com/).

Ngrok creates secure tunnels between your local machine and the internet, enabling you to temporarily expose local servers or services to the internet. It allows remote systems to access resources on your local machine or network without complex network configurations or exposing your local machine directly to the internet.

To install Ngrok, follow the instructions on their [download page](https://ngrok.com/download).

After successful installation, we can expose our local server/application to the internet. First, let's run our Flask application:

```bash
flask --app main run --debug
```

Next, on a different terminal, execute the following command:

```bash
ngrok http 5000
```

When you run `ngrok http 5000`, Ngrok will create a secure tunnel between your local machine and a randomly generated subdomain on the ngrok.com domain. The external URL will look something like `http://randomstring.ngrok-free.app`, where `randomstring` is a unique identifier generated by Ngrok.

You should see output similar to this:

```
ngrok                                                           (Ctrl+C to quit)

🤯 Try the ngrok Kubernetes Ingress Controller: https://ngrok.com/s/k8s-ingress

Session Status                online
Account                       Freedom Loisa (Plan: Free)
Version                       3.3.1
Region                        Europe (eu)
Latency                       -
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://6739-41-90-188-108.ngrok-free.app -> http:

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

Now, copy the following `URL` into your browser's search bar and hit enter:

`https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11/setWebhook?url=https://bacd-41-90-188-108.ngrok-free.app/telegram_bot/`

> _NOTE: Remember to replace the token with your bot's actual token and the ngrok-generated URL with the one generated on your end._

You will receive a response that looks something like this:

```json
{
	"ok": true,
	"result": true,
	"description": "Webhook was set"
}
```

Now, let's test our webhook. Open the Telegram app and send a message (e.g., "Hello World!" or anything else) to our bot.

![Telegram Screenshot](https://ik.imagekit.io/vg0ett8n6/Blog/Screenshot_from_2023-07-20_04-49-02.png?updatedAt=1689836277808)

If you look back at your project folder, you will notice that a new file named `response.json` has been created, containing data similar to this:

```json
{
	"update_id": 498701086,
	"message": {
		"message_id": 6,
		"from": {
			"id": 6209717094,
			"is_bot": false,
			"first_name": "Loisa",
			"last_name": "Kitakaya",
			"username": "loisakitakaya",
			"language_code": "en"
		},
		"chat": {
			"id": 6209717094,
			"first_name": "Loisa",
			"last_name": "Kitakaya",
			"username": "loisakitakaya",
			"type": "private"
		},
		"date": 1689817553,
		"text": "Hello world!\nHello my bot!"
	}
}
```

What has happened here? 🤔

When we sent a message to our bot, the Telegram server sent us an update in `JSON` format that contains various information about the **sender** (us), the **chat**, and the **message** we sent to the bot. If you try sending a different message to the bot, you will notice that the response.json file will be updated with your new message.

Pretty neat, right? 😎

With that, we have successfully created a webhook, connected it to our Telegram bot, and tested it to ensure it works. Now, let's proceed to code some functionality into our bot.

## We All Love GIFs

In this section, we'll give our bot a fun and easy function – a GIF bot! The purpose of this bot will be to search for and send GIFs in response to user queries. We will achieve this by leveraging the GIPHY API, a platform that provides a vast collection of animated GIFs and short video clips.

To get started, head over to [GIPHY](https://giphy.com/), create an account, and log in. Next, create an app on GIPHY to obtain an API key, which we will use in our bot to fetch GIFs. Follow the instructions on [Create An App](https://developers.giphy.com/dashboard/?create=true) to generate your API key. We shall use the [Search Endpoint](https://developers.giphy.com/docs/api/endpoint/#search) to search for GIFs.

> _GIPHY Search gives you instant access to our library of millions of GIFs and Stickers by entering a word or phrase. With our unparalleled search algorithm, users can easily express themselves and animate their conversations. -- GIPHY documentation_

Now that we have our API key, let's proceed with the coding. Update your main.py file with the following code:

```python
"""
Importing necessary modules:

json: Used for working with JSON data.

urllib.parse, urllib.request: Used for working with URLs and making HTTP requests.

Flask, Response, request from flask: Used to create the web application and handle incoming HTTP requests.
"""

import json
from urllib import parse, request as fetch
from flask import Flask, Response, request

app = Flask(__name__)

"""
Setting up variables:

GIPHY_TOKEN: An API token required to access the GIPHY API.

TELEGRAM_BOT_TOKEN: The API token for the Telegram bot.

gif_url, sticker_url: URLs for the GIPHY API endpoints to search for GIFs and stickers.

telegram_bot_url: The base URL for Telegram bot API requests.
"""

GIPHY_TOKEN = "9xF491t1umpU2343rL10JQjfe0WfTqIz"  # NOTE: replace with your app api key
TELEGRAM_BOT_TOKEN = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"  # NOTE: replace with your bot's token

gif_url = "https://api.giphy.com/v1/gifs/search"
sticker_url = "https://api.giphy.com/v1/stickers/search"
telegram_bot_url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}"


# Defining helper functions:

"""
parse_data(response): Extracts relevant data from the JSON response received from Telegram's webhook.
Such data includes the message and chat ID.
"""


def parse_data(response):
    try:
        msg = response["message"]["text"]
        chat_id = response["message"]["chat"]["id"]

    except (KeyError, IndexError):
        msg = None
        chat_id = None

    finally:
        return {"chat_id": chat_id, "msg": msg}


"""
request_gif(query): Sends a request to the GIPHY API to search for a GIF based on the provided query.
It returns the API response as a JSON string.
"""


def request_gif(query):
    if len(query) > 1:
        new_query = " ".join(query)

    else:
        new_query = query[0]

    params = parse.urlencode(
        {
            "api_key": GIPHY_TOKEN,
            "q": new_query,
            "limit": "1",
            "offset": "0",
            "rating": "g",
            "lang": "en",
            "bundle": "messaging_non_clips",
        }
    )

    with fetch.urlopen("".join((gif_url, "?", params))) as response:
        data = json.loads(response.read())

    return json.dumps(data, sort_keys=True, indent=4)


"""
request_sticker(query): Sends a request to the GIPHY API to search for a sticker based on the provided query.
It returns the API response as a JSON string.
"""


def request_sticker(query):
    if len(query) > 1:
        new_query = " ".join(query)

    else:
        new_query = query[0]

    new_query = " ".join(query)

    params = parse.urlencode(
        {
            "api_key": GIPHY_TOKEN,
            "q": new_query,
            "limit": "1",
            "offset": "0",
            "rating": "g",
            "lang": "en",
            "bundle": "messaging_non_clips",
        }
    )

    with fetch.urlopen("".join((sticker_url, "?", params))) as response:
        data = json.loads(response.read())

    return json.dumps(data, sort_keys=True, indent=4)


"""
send_file(chat_id, url): Sends a document (file) to a specific chat on Telegram using the Telegram bot API.
It sends a request to the Telegram API and handles the response.
"""


def send_file(chat_id, url):
    params = parse.urlencode({"chat_id": chat_id, "document": url})

    with fetch.urlopen(
        "".join((f"{telegram_bot_url}/sendDocument", "?", params))
    ) as response:
        data = json.loads(response.read())

    # print(json.dumps(data, sort_keys=True, indent=4))

    return


"""
send_message(chat_id, message): Sends a text message to a specific chat on Telegram using the Telegram bot API.
It sends a request to the Telegram API and handles the response.
"""


def send_message(chat_id, message):
    params = parse.urlencode({"chat_id": chat_id, "text": message})

    with fetch.urlopen(
        "".join((f"{telegram_bot_url}/sendMessage", "?", params))
    ) as response:
        data = json.loads(response.read())

    # print(json.dumps(data, sort_keys=True, indent=4))

    return


@app.route("/telegram_bot/", methods=["POST"])
def telegram_bot():
    callback = request.json
    giphy_response = None

    parsed_data = parse_data(callback)

    chat_id = parsed_data["chat_id"]
    message = parsed_data["msg"]

    deconstructed_message = message.split()

    if deconstructed_message[0] == "/gif":
        deconstructed_message.pop(0)

        giphy_response = request_gif(deconstructed_message)

    elif deconstructed_message[0] == "/sticker":
        deconstructed_message.pop(0)

        giphy_response = request_sticker(deconstructed_message)

    else:
        message = "Sorry! Didn't understand that command."

        send_message(chat_id, message)

    if giphy_response:
        try:
            giphy_response_dict = json.loads(giphy_response)

            file = giphy_response_dict["data"][0]["images"]["original"]["url"]

        except (KeyError, IndexError):
            file = None

        else:
            send_file(chat_id, file)

    return Response("ok", 200)
```

We have defined some helper functions, which are documented in summary in the comments within the code. Now, the code may seem intimidating at first, but it's straightforward once we understand it.

- The `telegram_bot()` function handles incoming messages and executes specific actions based on the user's **command**.

> _Check: [Commands](https://core.telegram.org/api/bots/commands), and [Bot commands explained](https://core.telegram.org/bots/features#commands)._


- `giphy_response = None`: Initializes the variable `giphy_response` to `None`, which will store the response received from the GIPHY API after querying for GIFs or stickers.

- `parsed_data = parse_data(callback)`: This line calls the `parse_data()` function with the `callback` data as an argument. The `parse_data()` function extracts relevant information from the Telegram `JSON` data, such as the chat ID and the message text.

- `deconstructed_message = message.split()`: This line splits the message text into individual words and stores them in a list called `deconstructed_message`. This is done to process the user's command and any additional parameters sent along with it.

**Next, we handle different commands using `if` and `elif` statements:**

- If the first word in deconstructed_message is `/gif`, it means the user wants to fetch a GIF. We remove the `/gif` command from the list using `deconstructed_message.pop(0)`, and then call the `request_gif()` function with the remaining words as the query parameters. The API response is stored in `giphy_response`.

- If the first word in deconstructed_message is `/sticker`, it means the user wants to fetch a sticker. We remove the `/sticker` command from the list using `deconstructed_message.pop(0)`, and then call the `request_sticker()` function with the remaining words as the query parameters. The API response is stored in `giphy_response`.

- If the command is neither `/gif` nor `/sticker`, it means the bot didn't understand the user's command. In this case, an error message is set in the message variable, and the `send_message()` function is called to send the error message back to the user.

**Finally, we handle the GIPHY API response:**

- If `giphy_response` is not `None` (i.e., a valid response was received from the GIPHY API), we try to extract the URL of the GIF or sticker from the API response using a nested dictionary access. If the extraction is successful, the URL is stored in the `file` variable.

- If the URL extraction fails due to a `KeyError` or `IndexError`, it means the response from the GIPHY API does not contain the expected data structure. In such cases, file is set to None.

- If the URL extraction is successful, the `send_file()` function is called to send the GIF or sticker back to the user on Telegram.

With our updated code, we now have a fully functional GIF bot! Send a request to your bot with either the `/gif` or `/sticker` commands followed by any query for the type of GIF you want to receive.

![Telegram Screenshot](https://ik.imagekit.io/vg0ett8n6/Blog/Screenshot_from_2023-07-20_09-42-02.png?updatedAt=1689836278777)

Congratulations! You've successfully created a Telegram bot with webhooks in Python using Flask. With these basics, you can create as many bots as you want for free, and give them any functionality you desire.

Happy coding! ✌️