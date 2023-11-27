import os
from email.message import EmailMessage
from email.utils import formataddr
import ssl

import smtplib

email_sender = 'astonclarkefifa@gmail.com'
email_password = 'majg hlsz lgta wyot'
email_receiver = 'kshitijcool23@gmail.com'

subject = 'Securit alert for your instagram account!'
body = """
Hi Kshitij,
We have detected some suspicious actiivity on your instagram account. Please login to your account to verify your identity.
http://localhost:3000/

Thanks,
Instagram team
"""

em = EmailMessage()
em['From'] = formataddr(("Security alert", 'astonclarkefifa@gmail.com'))
em['To'] = email_receiver
em['Subject'] = subject
em.set_content(body)

context = ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com',465,context=context) as smtp:
    smtp.login(email_sender,email_password)
    smtp.sendmail(email_sender,email_receiver,em.as_string())

