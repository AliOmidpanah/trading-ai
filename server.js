// سرور خصوصی - فقط با یوزر و پسورد خودت باز می‌شود
// اجرا در کامپیوتر: npm install بعد npm start
// اجرا آنلاین: همین 3 فایل را روی Render بذار (راهنما.txt را بخوان)
const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// یوزر و پسورد را اینجا عوض کن (یا در هاست آنلاین در Env بذار)
const MY_USER = process.env.APP_USER || 'admin';
const MY_PASS = process.env.APP_PASSWORD || '1234';

app.use(basicAuth({
  users: { [MY_USER]: MY_PASS },
  challenge: true,
  realm: 'Private',
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log('✅ سرور خصوصی روشن شد روی پورت ' + PORT);
  console.log('یوزر: ' + MY_USER);
});
