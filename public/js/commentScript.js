const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-area').value.trim();
    const post_id = content.dataset.id;

    console.log("Post ID: " + post_id);
  
    if (content && post_id) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
};
  
document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);