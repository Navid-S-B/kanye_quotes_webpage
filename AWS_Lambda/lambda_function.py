import json
from random import randint

def get_quote():
    
    # Quote to send
    quote_to_send = ""
    
    # Send error when file cannot be opened.
    try:
        f = open("kanye_quotes.txt", "r")
        quotes = f.readlines()
        quote_to_send = quotes[randint(0,len(quotes))]
        quote_to_send = quote_to_send.rstrip()
        f.close()
    except:
        quote_to_send = "Internal Server Error"

    return quote_to_send


def lambda_handler(event, context):
    
    send_quote = get_quote()
    success_fail = 200

    # Add indicator to trigger error handling on webpage.
    if (send_quote == "Internal Server Error"):
        success_fail = 500

    return {
        'statusCode': success_fail,
        'body': json.dumps(send_quote)
    }
