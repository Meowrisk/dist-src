const reviewsSwitcher = document.querySelector('#reviewsSwitcher');

const findReview = (reviewId) => {
    const activeReview = document.querySelector('.reviews__item--active');
    activeReview.classList.remove('reviews__item--active');

    const currentReview = document.querySelector(`.reviews__item[data-item="${reviewId}"]`);
    currentReview.classList.add('reviews__item--active');
}

reviewsSwitcher.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;
    console.log('target', target);

    if (target.classList.contains('avatar__img')) {
        const activeListItem = document.querySelector('.avatar--active');

        if (activeListItem) {
            activeListItem.classList.remove('avatar--active');
        }

        const button = target.parentElement;
        const listElement = button.parentElement;
        listElement.classList.add('avatar--active');

        const id = button.getAttribute('data-open');

        findReview(id);
    }
});

