document.addEventListener('DOMContentLoaded', () => {
    const contact = JSON.parse(sessionStorage.getItem('contact'));
    if (contact) {
        // 更新头像、姓名和个性签名
        document.querySelector('.contact-header .avatar').src = contact.avatar;
        document.querySelector('.contact-info .name').textContent = contact.name;
        document.querySelector('.contact-info .qianming').textContent = contact.qianming;

        // 返回按钮事件
        document.querySelector('.contact-button').addEventListener('click', () => {
            alert(`联系 ${contact.name}`);
        });

        // 复制按钮事件
        document.querySelector('.copy-text').addEventListener('click', () => {
            navigator.clipboard.writeText(contact.phone).then(() => {
                alert('联系已复制');
            });
        });

        // 设置私人号部分的手机号
        document.querySelector('.private-number .phone').textContent = contact.phone;
    }
});
