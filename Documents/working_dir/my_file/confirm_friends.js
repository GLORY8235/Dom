
// here is the adding code
// function addFriend(button) {
//     button.textContent = 'Friend Added';
//     button.style.backgroundColor = '#ccc';
//     button.style.color = '#666';
//     button.disabled = true;
//     alert(`${button.closest('li').querySelector('strong').textContent} has been added as a friend!`);
// }

// // Delete Friend Functionality
// function deleteFriend(button) {
//     const confirmation = confirm(`Are you sure you want to delete ${button.closest('li').querySelector('strong').textContent}?`);
//     if (confirmation) {
//         const listItem = button.closest('li');
//         listItem.remove();
//         alert('Friend deleted successfully.');
//     }
// }

// Confirm Friend Functionality
// function confirmAction(button) {
//     button.textContent = 'Friend Added';
//     button.style.backgroundColor = '#ccc';
//     button.style.color = '#666';
//     button.disabled = true;

//     const friendName = button.closest('.position').querySelector('strong').textContent;
//     alert(`${friendName} has been added as a friend!`);
// }

// // Delete Friend Functionality
// function deleteAction(button) {
//     const friendName = button.closest('.position').querySelector('strong').textContent;
//     const confirmation = confirm(`Are you sure you want to delete ${friendName}?`);

//     if (confirmation) {
//     button.style.backgroundColor = '#ccc';
//         const container = button.closest('.imagecontainer');
//         container.remove();
//         alert(`${friendName} has been removed.`);
//     }
// }

    
    // Function to handle the "Confirm" button
    function confirmAction(button) {
      button.textContent = 'Friend Added';
      button.disabled = true;
      button.style.backgroundColor = '#ccc';
      const friendName = button.closest('.position').querySelector('.widthed').textContent;
      alert(`${friendName} has been added as a friend!`);
    }

    // Function to handle the "Delete" button
    function deleteAction(button) {
      const friendName = button.closest('.position').querySelector('.widthed').textContent;
      const confirmDelete = confirm(`Are you sure you want to delete ${friendName}?`);
      if (confirmDelete) {
        const wrapImg = button.closest('.wrap_img');
        wrapImg.remove();
        alert(`${friendName} has been removed.`);
      }
    }
  




    