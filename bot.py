from telegram import Update
from telegram.ext import ApplicationBuilder, MessageHandler, ContextTypes, filters

TOKEN = "8140457471:AAEUYRqq2J6ZiX71BqYmqXUGeQYp-6ZVwJM"

REPLY_TEXT = "ဖာသည်မနှင်းဦးဝေ"

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # delete user's message
    try:
        await update.message.delete()
    except:
        pass

    # send fixed reply
    await update.message.chat.send_message(REPLY_TEXT)

app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

app.run_polling()
