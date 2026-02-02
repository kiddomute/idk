from telegram import Update
from telegram.ext import ApplicationBuilder, MessageHandler, ContextTypes, filters

TOKEN = "8140457471:AAEUYRqq2J6ZiX71BqYmqXUGeQYp-6ZVwJM"

async def reply(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("ဖာသည်မနှင်းဦးဝေ")
    await update.message.delete()

app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(MessageHandler(filters.ALL, reply))
app.run_polling()
