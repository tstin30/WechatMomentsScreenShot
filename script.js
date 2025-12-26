// 默认头像列表（用于生成点赞头像）
const defaultAvatars = [
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiM2NjdlZWEiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjI0IiByPSIxMiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNNDggNTZDNDggNDguMjY4IDQwLjgzNyA0MiAzMiA0MkMyMy4xNjMgNDIgMTYgNDguMjY4IDE2IDU2SDQ4WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNmMDkiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjI0IiByPSIxMiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNNDggNTZDNDggNDguMjY4IDQwLjgzNyA0MiAzMiA0MkMyMy4xNjMgNDIgMTYgNDguMjY4IDE2IDU2SDQ4WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiMyZWNjNzEiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjI0IiByPSIxMiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNNDggNTZDNDggNDguMjY4IDQwLjgzNyA0MiAzMiA0MkMyMy4xNjMgNDIgMTYgNDguMjY4IDE2IDU2SDQ4WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNmMzljMTIiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjI0IiByPSIxMiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNNDggNTZDNDggNDguMjY4IDQwLjgzNyA0MiAzMiA0MkMyMy4xNjMgNDIgMTYgNDguMjY4IDE2IDU2SDQ4WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNlNzRjM2MiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjI0IiByPSIxMiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNNDggNTZDNDggNDguMjY4IDQwLjgzNyA0MiAzMiA0MkMyMy4xNjMgNDIgMTYgNDguMjY4IDE2IDU2SDQ4WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiM5YjU5YjYiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjI0IiByPSIxMiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNNDggNTZDNDggNDguMjY4IDQwLjgzNyA0MiAzMiA0MkMyMy4xNjMgNDIgMTYgNDguMjY4IDE2IDU2SDQ4WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=',
];

// 点赞名称列表
const likeNames = [
    '张三', '李四', '王五', '赵六', '钱七', '孙八', '周九', '吴十',
    '郑小明', '刘小红', '陈小华', '杨小丽', '黄小军', '朱小芳', '徐小强',
    '何小梅', '林小东', '高小美', '罗小刚', '梁小敏'
];

// 评论数据存储
let comments = [];
let momentImages = [];
let userAvatar = '';

// 获取当前时间（时:分格式）
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// 获取当前时间减去30分钟（格式：X 分钟前）
function getTimeAgo30Minutes() {
    const now = new Date();
    const past = new Date(now.getTime() - 30 * 60 * 1000); // 减去30分钟
    const diffMinutes = Math.floor((now - past) / (60 * 1000));
    return `${diffMinutes} 分钟前`;
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 创建全局的防抖版本generatePreview函数
let debouncedGeneratePreview;

// 设置自动更新预览的事件监听器
function setupAutoPreviewListeners() {
    // 创建防抖版本的generatePreview函数
    debouncedGeneratePreview = debounce(generatePreview, 300);
    
    // 用户名输入
    document.getElementById('username').addEventListener('input', debouncedGeneratePreview);
    
    // 定位信息输入
    document.getElementById('location').addEventListener('input', debouncedGeneratePreview);
    
    // 发表时间输入
    document.getElementById('postTime').addEventListener('input', debouncedGeneratePreview);
    
    // 朋友圈内容输入
    document.getElementById('content').addEventListener('input', debouncedGeneratePreview);
    
    // 点赞数输入
    document.getElementById('likeCount').addEventListener('input', function() {
        // 限制点赞数在合理范围内
        let value = parseInt(this.value) || 0;
        if (value < 0) value = 0;
        if (value > 100) value = 100;
        this.value = value;
        debouncedGeneratePreview();
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 头像上传事件
    document.getElementById('avatarInput').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                userAvatar = event.target.result;
                const avatarPreview = document.getElementById('avatarPreview');
                const previewAvatar = document.getElementById('previewAvatar');
                avatarPreview.src = userAvatar;
                previewAvatar.src = userAvatar;
                // 自动更新预览
                generatePreview();
            };
            reader.readAsDataURL(file);
        }
    });

    // 朋友圈图片上传事件
    document.getElementById('momentImageInput').addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        momentImages = [];
        const previewContainer = document.getElementById('momentImagesPreview');
        previewContainer.innerHTML = '';

        files.forEach((file, index) => {
            if (index < 9) { // 最多9张图片
                const reader = new FileReader();
                reader.onload = function(event) {
                    momentImages.push(event.target.result);
                    
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    previewContainer.appendChild(img);
                    
                    // 当所有图片都加载完成后自动更新预览
                    if (momentImages.length === files.length && momentImages.length > 0) {
                        generatePreview();
                    }
                };
                reader.readAsDataURL(file);
            }
        });
        
        // 如果没有选择图片，也更新预览
        if (files.length === 0) {
            generatePreview();
        }
    });

    // 设置默认头像（从 avatar 文件夹随机选择一个）
    const randomAvatarIndex = Math.floor(Math.random() * 5000) + 1; // 1-5000
    const defaultAvatar = `avatar/a${randomAvatarIndex}.jpg`;
    const avatarPreview = document.getElementById('avatarPreview');
    const previewAvatar = document.getElementById('previewAvatar');
    avatarPreview.src = defaultAvatar;
    previewAvatar.src = defaultAvatar;
    userAvatar = defaultAvatar;

    // 设置默认发表时间为当前时间减去30分钟
    const timeAgo = getTimeAgo30Minutes();
    document.getElementById('postTime').value = timeAgo;
    
    // 设置状态栏时间为当前时间
    const currentTime = getCurrentTime();
    document.getElementById('statusBarTime').textContent = currentTime;

    // 为所有输入项添加自动更新预览的事件监听器
    setupAutoPreviewListeners();

    // 初始化时生成一次预览
    setTimeout(() => {
        generatePreview();
    }, 100);
    
    // 添加一个默认评论示例
    setTimeout(() => {
        addComment();
        setTimeout(() => {
            const firstCommentItem = document.querySelector('.comment-item');
            if (firstCommentItem) {
                // firstCommentItem.querySelector('.comment-author-input').value = '小明';
                // firstCommentItem.querySelector('.comment-content-input').value = '看起来不错！';
                if (typeof debouncedGeneratePreview === 'function') {
                    debouncedGeneratePreview();
                } else {
                    generatePreview();
                }
            }
        }, 50);
    }, 150);

    // 添加显示选项的事件监听
    document.getElementById('showStatusBar').addEventListener('change', toggleStatusBar);
    document.getElementById('showNavBar').addEventListener('change', toggleNavBar);
    
    // 添加点赞显示方式的事件监听
    const likeDisplayRadios = document.querySelectorAll('input[name="likeDisplayMode"]');
    likeDisplayRadios.forEach(radio => {
        radio.addEventListener('change', generatePreview);
    });
});

// 添加评论
function addComment() {
    const commentId = 'comment_' + Date.now();
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    commentItem.id = commentId;
    commentItem.innerHTML = `
        <input type="text" placeholder="评论者" class="comment-author-input">
        <input type="text" placeholder="评论内容" class="comment-content-input">
        <button onclick="removeComment('${commentId}')">删除</button>
    `;
    document.getElementById('commentsList').appendChild(commentItem);
    
    // 为新添加的输入框绑定事件监听器
    const inputs = commentItem.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', debouncedGeneratePreview);
    });
    
    // 自动更新预览
    debouncedGeneratePreview();
}

// 删除评论
function removeComment(commentId) {
    const element = document.getElementById(commentId);
    if (element) {
        element.remove();
        // 删除评论后自动更新预览
        debouncedGeneratePreview();
    }
}

// 切换状态栏显示
function toggleStatusBar() {
    const statusBar = document.querySelector('.status-bar');
    const showStatusBar = document.getElementById('showStatusBar').checked;
    statusBar.style.display = showStatusBar ? 'flex' : 'none';
}

// 切换导航栏显示
function toggleNavBar() {
    const navBar = document.querySelector('.nav-bar');
    const showNavBar = document.getElementById('showNavBar').checked;
    navBar.style.display = showNavBar ? 'flex' : 'none';
}

// 生成点赞头像（从 avatar 文件夹随机选取）
function generateLikeAvatars(count) {
    const likesList = document.getElementById('likesList');
    likesList.innerHTML = '';

    // 总共有 5000 张头像（a1.jpg 到 a5000.jpg）
    const totalAvatars = 5000;
    
    // 生成不重复的随机数组
    const usedIndexes = new Set();
    const randomIndexes = [];
    
    while (randomIndexes.length < count && randomIndexes.length < totalAvatars) {
        const randomIndex = Math.floor(Math.random() * totalAvatars) + 1; // 1-5000
        if (!usedIndexes.has(randomIndex)) {
            usedIndexes.add(randomIndex);
            randomIndexes.push(randomIndex);
        }
    }
    
    // 根据随机索引生成头像
    randomIndexes.forEach(index => {
        const avatar = document.createElement('img');
        avatar.className = 'like-avatar';
        avatar.src = `avatar/a${index}.jpg`;
        likesList.appendChild(avatar);
    });
}

// 生成点赞名称
function generateLikeNames(count) {
    const likesList = document.getElementById('likesList');
    likesList.innerHTML = '';
    likesList.className = 'likes-list names-mode';

    const names = [];
    for (let i = 0; i < count; i++) {
        names.push(likeNames[i % likeNames.length]);
    }
    
    likesList.textContent = names.join(', ');
}

// 生成预览
function generatePreview() {
    // 更新用户名
    const username = document.getElementById('username').value;
    document.getElementById('previewUsername').textContent = username;

    // 更新内容
    const content = document.getElementById('content').value;
    document.getElementById('previewContent').textContent = content;

    // 更新发表时间
    const postTime = document.getElementById('postTime').value;
    document.getElementById('previewTime').textContent = postTime;

    // 更新定位信息
    const location = document.getElementById('location').value;
    const locationElement = document.getElementById('previewLocation');
    if (location) {
        locationElement.textContent = location;
        locationElement.style.display = 'inline';
    } else {
        locationElement.textContent = '';
        locationElement.style.display = 'none';
    }

    // 更新朋友圈图片
    const previewImagesContainer = document.getElementById('previewImages');
    previewImagesContainer.innerHTML = '';
        
    if (momentImages.length > 0) {
        // 根据图片数量设置不同的 class
        let imageClass = 'moment-images';
        if (momentImages.length === 1) {
            imageClass += ' single';  // 一张图：60% 宽度
        } else if (momentImages.length === 2) {
            imageClass += ' two';  // 两张图：各占50%
        } else {
            imageClass += ' multiple';  // 三张及以上：九宫格
        }
        previewImagesContainer.className = imageClass;
            
        // 最多显示9张图片
        const displayImages = momentImages.slice(0, 9);
        displayImages.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            previewImagesContainer.appendChild(img);
        });
    }

    // 生成点赞
    const likeCount = parseInt(document.getElementById('likeCount').value) || 0;
    const likesSection = document.getElementById('likesSection');
    const interactionSection = document.getElementById('interactionSection');
    const likeDisplayMode = document.querySelector('input[name="likeDisplayMode"]:checked').value;
    
    // 根据点赞显示模式设置互动区域的对齐方式
    if (likeDisplayMode === 'avatar') {
        // 头像模式：与用户头像对齐
        interactionSection.className = 'interaction-section avatar-mode';
    } else {
        // 名称模式：与正文对齐
        interactionSection.className = 'interaction-section names-mode';
    }
    
    if (likeCount > 0) {
        likesSection.style.display = 'flex';
        interactionSection.style.display = 'block';
        
        // 根据显示模式生成点赞内容
        if (likeDisplayMode === 'avatar') {
            document.getElementById('likesList').className = 'likes-list';
            generateLikeAvatars(likeCount);
        } else {
            generateLikeNames(likeCount);
        }
    } else {
        likesSection.style.display = 'none';
    }

    // 生成评论
    const commentItems = document.querySelectorAll('.comment-item');
    const commentsSection = document.getElementById('commentsSection');
    commentsSection.innerHTML = '';

    let hasComments = false;
    commentItems.forEach(item => {
        const author = item.querySelector('.comment-author-input').value;
        const content = item.querySelector('.comment-content-input').value;
        
        if (author && content) {
            hasComments = true;
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.innerHTML = `
                <span class="comment-author">${author}</span>: 
                <span class="comment-text">${content}</span>
            `;
            commentsSection.appendChild(commentDiv);
        }
    });

    // 控制互动区域显示
    if (likeCount === 0 && !hasComments) {
        interactionSection.style.display = 'none';
    } else {
        interactionSection.style.display = 'block';
        
        // 确保评论区域正确显示/隐藏
        const commentsSection = document.getElementById('commentsSection');
        if (commentsSection) {
            if (hasComments) {
                // CSS会自动处理显示，因为我们设置了:not(:empty)规则
                // 不需要手动设置display
            } else {
                commentsSection.innerHTML = ''; // 清空内容，让CSS隐藏
            }
        }
    }

    // 如果只有评论没有点赞，隐藏点赞区域
    if (likeCount === 0 && hasComments) {
        likesSection.style.display = 'none';
    }
}

// 导出截图
async function exportScreenshot() {
    const momentContent = document.getElementById('momentContent');
    const phoneContainer = momentContent.parentElement;
    
    try {
        // 隐藏底部评论输入框
        const commentInputBar = momentContent.querySelector('.comment-input-bar');
        const originalDisplay = commentInputBar.style.display;
        commentInputBar.style.display = 'none';

        // 临时确保手机容器高度适应内容
        const phoneContainer = momentContent.closest('.phone-mockup');
        const originalHeight = phoneContainer.style.height;
        phoneContainer.style.height = 'auto';

        // 将所有本地图片转换为base64以避免CORS问题
        const images = phoneContainer.querySelectorAll('img');
        const originalSources = [];
        
        // 保存原始图片源并转换为base64
        for (let i = 0; i < images.length; i++) {
            const img = images[i];
            if (img.src && (img.src.startsWith('file://') || img.src.startsWith('avatar/') || img.src.includes('/avatar/'))) {
                originalSources.push(img.src);
                
                // 使用fetch获取图片并转换为base64
                try {
                    const response = await fetch(img.src);
                    const blob = await response.blob();
                    const reader = new FileReader();
                    
                    // 由于fetch是异步的，我们需要使用Promise来处理
                    img.src = await new Promise((resolve, reject) => {
                        reader.onload = () => resolve(reader.result);
                        reader.onerror = () => {
                            // 如果转换失败，使用占位图
                            resolve('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSIxNCIgeT0iMzIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSI+5Zu+54mH5YqgPC90ZXh0Pjwvc3ZnPg==');
                            reject();
                        };
                        reader.readAsDataURL(blob);
                    });
                } catch (e) {
                    console.warn('图片转换失败:', img.src);
                    // 使用占位图
                    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSIxNCIgeT0iMzIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSI+5Zu+54mH5YqgPC90ZXh0Pjwvc3ZnPg==';
                }
            }
        }

        // 使用 html2canvas 生成截图
        const canvas = await html2canvas(phoneContainer, {
            backgroundColor: '#ededed',
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: false
        });

        // 恢复原始图片源
        for (let i = 0; i < images.length; i++) {
            if (originalSources[i]) {
                images[i].src = originalSources[i];
            }
        }

        // 恢复评论输入框和手机容器高度
        commentInputBar.style.display = originalDisplay;
        phoneContainer.style.height = originalHeight;

        // 将 canvas 转换为图片并下载
        canvas.toBlob(function(blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = `wechat_moment_${Date.now()}.png`;
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        });

        alert('截图已生成并开始下载！');
    } catch (error) {
        console.error('截图失败：', error);
        
        // 恢复评论输入框
        try {
            const commentInputBar = document.querySelector('.comment-input-bar');
            if (commentInputBar) {
                commentInputBar.style.display = 'flex';
            }
        } catch (e) {}
        
        alert('截图生成失败，请重试！');
    }
}

// 实时更新预览（输入框变化时）
document.addEventListener('DOMContentLoaded', function() {
    const inputElements = ['username', 'content', 'postTime', 'likeCount'];
    
    inputElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', generatePreview);
        }
    });
});
