// api/ip-signature.js
import { createCanvas, loadImage } from 'canvas';
import useragent from 'useragent';

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const agent = useragent.parse(req.headers['user-agent']);
  const os = agent.os.toString();
  const browser = agent.toAgent();
  const now = new Date().toLocaleString('zh-CN', { hour12: false });

  // 创建画布
  const width = 500;
  const height = 120;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 背景
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // 字体样式
  ctx.fillStyle = '#000000';
  ctx.font = '16px sans-serif';

  // 写入信息
  ctx.fillText(`IP: ${ip}`, 20, 30);
  ctx.fillText(`Time: ${now}`, 20, 55);
  ctx.fillText(`OS: ${os}`, 20, 80);
  ctx.fillText(`Browser: ${browser}`, 20, 105);

  // 返回 PNG
  res.setHeader('Content-Type', 'image/png');
  res.send(canvas.toBuffer('image/png'));
}
