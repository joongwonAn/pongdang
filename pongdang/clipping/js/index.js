const postTap = document.querySelector('.post_tap');
const partnerTap = document.querySelector('.partner_tap');
const feedTap = document.querySelector('.feed_tap');
const postWrap = document.querySelector('.post_wrap');
const partnerWrap = document.querySelector('.partner_wrap');
const feedWrap = document.querySelector('.feed_wrap');
const content = document.querySelector('.content');

postTap.addEventListener('click', () => {
    postTap.style.color = '#000';
    partnerTap.style.color = '#999999';
    feedTap.style.color = '#999999';
    postWrap.style.display = 'block';
    partnerWrap.style.display = 'none';
    feedWrap.style.display = 'none';
    content.style.height = '';
})
partnerTap.addEventListener('click', () => {
    postTap.style.color = '#999999';
    partnerTap.style.color = '#000';
    feedTap.style.color = '#999999';
    postWrap.style.display = 'none';
    partnerWrap.style.display = 'block';
    feedWrap.style.display = 'none';
    content.style.height = '1200px';
})
feedTap.addEventListener('click', () => {
    feedWrap.childNodes[1].style.display = 'block';
    // feedWrap.childNodes[3].style.display = 'block';
    postTap.style.color = '#999999';
    partnerTap.style.color = '#999999';
    feedTap.style.color = '#000';
    postWrap.style.display = 'none';
    partnerWrap.style.display = 'none';
    feedWrap.style.display = 'flex';
    content.style.height = '';
})