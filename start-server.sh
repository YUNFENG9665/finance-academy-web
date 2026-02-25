#!/bin/bash

# Finance Academy Web Server Launcher
# 金融学术殿堂 - 本地服务器启动脚本

echo "🎓 金融学术殿堂 - 启动服务器"
echo "================================"
echo ""

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ 使用 Python 3 启动服务器..."
    python3 -m http.server 8080 &
    SERVER_PID=$!
    
elif command -v python &> /dev/null; then
    echo "✅ 使用 Python 启动服务器..."
    python -m http.server 8080 &
    SERVER_PID=$!
    
# Check if Node.js and npx are available
elif command -v npx &> /dev/null; then
    echo "✅ 使用 Node.js (npx serve) 启动服务器..."
    npx serve . -l 8080 &
    SERVER_PID=$!
    
# Check if PHP is available
elif command -v php &> /dev/null; then
    echo "✅ 使用 PHP 启动服务器..."
    php -S localhost:8080 &
    SERVER_PID=$!
    
else
    echo "❌ 未找到可用的服务器启动工具"
    echo ""
    echo "请安装以下任一工具："
    echo "  - Python 3: https://www.python.org/"
    echo "  - Node.js: https://nodejs.org/"
    echo "  - PHP: https://www.php.net/"
    echo ""
    echo "或直接打开 index.html 文件浏览"
    exit 1
fi

# Wait a moment for server to start
sleep 2

echo ""
echo "🚀 服务器已启动！"
echo ""
echo "📍 本地地址: http://localhost:8080"
echo "🔗 网络地址: http://$(ifconfig | grep 'inet ' | grep -v '127.0.0.1' | awk '{print $2}' | head -n 1):8080"
echo ""
echo "按 Ctrl+C 停止服务器"
echo ""

# Open browser (macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    open "http://localhost:8080"
fi

# Wait for interrupt
trap "kill $SERVER_PID 2>/dev/null; echo ''; echo '👋 服务器已停止'; exit 0" INT
wait $SERVER_PID
