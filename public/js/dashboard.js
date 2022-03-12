const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

if (document.querySelector('.post-list')) {
  document.querySelector('.post-list').addEventListener('click', delButtonHandler);
}

document.querySelector('#newPost').addEventListener('click', () => {
  document.location.replace('/newPost');
});
