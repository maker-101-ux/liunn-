
        // 获取导航栏元素
        const nav = document.querySelector('.nav1');
        // 定义底部触发区域的高度（屏幕底部100px范围）
        const triggerHeight = 100;

        // 监听鼠标移动事件
        document.addEventListener('mousemove', (e) => {
            // 计算鼠标距离屏幕底部的距离
            const distanceFromBottom = window.innerHeight - e.clientY;
            
            // 如果鼠标进入底部触发区域，显示导航栏
            if (distanceFromBottom < triggerHeight) {
                nav.classList.add('show');
            } else {
                // 否则隐藏导航栏
                nav.classList.remove('show');
            }
        });
