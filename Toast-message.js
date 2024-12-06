function toast({ 
    title, 
    message, 
    type = 'success', 
    duration = 3000,  // default duration is 2 seconds
}) { 
    const main = document.getElementById('toast'); 
    if (main) { 
        const toast = document.createElement('div');  
         // Remove toast after duration
        const autoRemoveId = setTimeout(() => {
            toast.remove();
        }, duration + 1000);
        
        //remove toast after click X
        toast.onclick = function(e) { 
            if(e.target.closest('.toast-close')){ 
                main.removeChild(toast);  
                clearTimeout(autoRemoveId); 
            }
        }
        const icons = { 
            success: 'fas fa-check-circle', 
            info:  'fas fa-info-circle', 
            warning:  'fas fa-exclamation-circle', 
            error:  'fas fa-exclamation-circle',
        } 

        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft 0.5s ease-in-out, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = ` 
            <div class="toast-icon">  
                <i class="${icon}"></i>
            </div> 

            <div class="toast-body"> 
                <h3 class="toast-title">${title}</h3> 
                <p class="toast-msg">${message}</p>
            </div>  
   
            <div class="toast-close"> 
                <i class="fa-solid fa-circle-xmark"></i>
            </div>

        
        `;  
        main.appendChild(toast); 

       
    } 

} 



function showSuccessToast(){ 
    toast({ 
        title: 'Success', 
        message: 'Your computer has been connected successfully.', 
        type: 'success', 
        duration: 10000,
    }) 
}
function showErrorToast(){ 
    toast({
        title: 'Error', 
        message: 'Failed to connect to the computer.', 
        type: 'error', 
        duration: 10000,
    }) 
}
function showWarningToast(){ 
    toast({
        title: 'Warning', 
        message: 'warning about the computer', 
        type: 'warning', 
        duration: 10000,
    })
}

function showInfoToast(){ 
    toast({
        title: 'Info', 
        message: 'Information about the computer', 
        type: 'info', 
        duration: 10000,
    }) 
}