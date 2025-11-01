/**
 * Contact Form Validation and Handling
 * Handles form submission, validation, and user feedback
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (!contactForm) return;

    // ========================================
    // Form Validation
    // ========================================
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        // Optional field, but if filled, should be valid
        if (!phone) return true;

        // Remove spaces, dashes, and parentheses
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');

        // Check if it contains only numbers and + (for international)
        const re = /^[\+]?[0-9]{7,15}$/;
        return re.test(cleanPhone);
    }

    function showError(input, message) {
        const formGroup = input.closest('.form-group');

        // Remove existing error
        const existingError = formGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Add error styling
        input.classList.add('error');
        input.setAttribute('aria-invalid', 'true');

        // Create and add error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'var(--error-color)';
        errorDiv.style.fontSize = '0.9rem';
        errorDiv.style.marginTop = 'var(--spacing-xs)';
        errorDiv.textContent = message;
        errorDiv.setAttribute('role', 'alert');

        formGroup.appendChild(errorDiv);
    }

    function clearError(input) {
        const formGroup = input.closest('.form-group');
        const existingError = formGroup.querySelector('.error-message');

        if (existingError) {
            existingError.remove();
        }

        input.classList.remove('error');
        input.removeAttribute('aria-invalid');
    }

    function showFormMessage(message, type = 'success') {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        formMessage.style.display = 'block';
        formMessage.setAttribute('role', 'alert');

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Hide message after 10 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 10000);
    }

    function hideFormMessage() {
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';
    }

    // ========================================
    // Real-time Validation
    // ========================================
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const privacyCheckbox = contactForm.querySelector('input[name="privacy"]');

    // Validate on blur
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                showError(this, 'Bitte geben Sie Ihren Namen ein.');
            } else if (this.value.trim().length < 2) {
                showError(this, 'Der Name muss mindestens 2 Zeichen lang sein.');
            } else {
                clearError(this);
            }
        });

        nameInput.addEventListener('input', function() {
            if (this.value.trim().length >= 2) {
                clearError(this);
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                showError(this, 'Bitte geben Sie Ihre E-Mail-Adresse ein.');
            } else if (!validateEmail(this.value)) {
                showError(this, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            } else {
                clearError(this);
            }
        });

        emailInput.addEventListener('input', function() {
            if (validateEmail(this.value)) {
                clearError(this);
            }
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            if (this.value.trim() !== '' && !validatePhone(this.value)) {
                showError(this, 'Bitte geben Sie eine gültige Telefonnummer ein.');
            } else {
                clearError(this);
            }
        });

        phoneInput.addEventListener('input', function() {
            if (this.value.trim() === '' || validatePhone(this.value)) {
                clearError(this);
            }
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                showError(this, 'Bitte geben Sie eine Nachricht ein.');
            } else if (this.value.trim().length < 10) {
                showError(this, 'Die Nachricht muss mindestens 10 Zeichen lang sein.');
            } else {
                clearError(this);
            }
        });

        messageInput.addEventListener('input', function() {
            if (this.value.trim().length >= 10) {
                clearError(this);
            }
        });
    }

    // ========================================
    // Form Submission
    // ========================================
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Clear previous messages
        hideFormMessage();

        // Get form values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const message = messageInput.value.trim();
        const privacyAccepted = privacyCheckbox ? privacyCheckbox.checked : false;

        let isValid = true;

        // Validate name
        if (name === '') {
            showError(nameInput, 'Bitte geben Sie Ihren Namen ein.');
            isValid = false;
        } else if (name.length < 2) {
            showError(nameInput, 'Der Name muss mindestens 2 Zeichen lang sein.');
            isValid = false;
        }

        // Validate email
        if (email === '') {
            showError(emailInput, 'Bitte geben Sie Ihre E-Mail-Adresse ein.');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError(emailInput, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            isValid = false;
        }

        // Validate phone (optional)
        if (phone !== '' && !validatePhone(phone)) {
            showError(phoneInput, 'Bitte geben Sie eine gültige Telefonnummer ein.');
            isValid = false;
        }

        // Validate message
        if (message === '') {
            showError(messageInput, 'Bitte geben Sie eine Nachricht ein.');
            isValid = false;
        } else if (message.length < 10) {
            showError(messageInput, 'Die Nachricht muss mindestens 10 Zeichen lang sein.');
            isValid = false;
        }

        // Validate privacy checkbox
        if (privacyCheckbox && !privacyAccepted) {
            const formGroup = privacyCheckbox.closest('.form-group');
            showError(privacyCheckbox, 'Bitte akzeptieren Sie die Datenschutzbestimmungen.');
            isValid = false;
        }

        // If validation fails, focus first error and stop
        if (!isValid) {
            const firstError = contactForm.querySelector('.error');
            if (firstError) {
                firstError.focus();
            }
            return;
        }

        // ========================================
        // Submit Form (Client-side only for now)
        // ========================================

        // Disable submit button to prevent double submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Wird gesendet...';

        // Simulate form submission (replace with actual backend call)
        setTimeout(() => {
            // This is where you would normally send data to a server
            // For now, we'll just show a success message

            console.log('Form data:', {
                name,
                email,
                phone,
                message,
                privacyAccepted
            });

            // Show success message
            showFormMessage(
                'Vielen Dank für Ihre Nachricht! Ich werde mich so bald wie möglich bei Ihnen melden.',
                'success'
            );

            // Reset form
            contactForm.reset();

            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;

            // Clear any remaining errors
            const allInputs = contactForm.querySelectorAll('input, textarea');
            allInputs.forEach(input => clearError(input));

        }, 1500);

        // ========================================
        // TODO: Actual Backend Integration
        // ========================================
        /*
        // Example of how to integrate with a backend:

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Server error');
            }
            return response.json();
        })
        .then(data => {
            showFormMessage(
                'Vielen Dank für Ihre Nachricht! Ich werde mich so bald wie möglich bei Ihnen melden.',
                'success'
            );
            contactForm.reset();
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        })
        .catch(error => {
            showFormMessage(
                'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie mich direkt per E-Mail.',
                'error'
            );
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
        */
    });

    // ========================================
    // Character Counter for Message (optional)
    // ========================================
    if (messageInput) {
        const maxLength = 1000;
        const formGroup = messageInput.closest('.form-group');

        // Create counter
        const counter = document.createElement('div');
        counter.className = 'character-counter';
        counter.style.fontSize = '0.85rem';
        counter.style.color = 'var(--text-light)';
        counter.style.textAlign = 'right';
        counter.style.marginTop = 'var(--spacing-xs)';

        formGroup.appendChild(counter);

        function updateCounter() {
            const length = messageInput.value.length;
            counter.textContent = `${length} / ${maxLength} Zeichen`;

            if (length > maxLength * 0.9) {
                counter.style.color = 'var(--error-color)';
            } else {
                counter.style.color = 'var(--text-light)';
            }
        }

        messageInput.addEventListener('input', updateCounter);
        messageInput.setAttribute('maxlength', maxLength);
        updateCounter();
    }

    // ========================================
    // Honeypot Field (spam protection)
    // ========================================
    // Add a hidden field that bots will fill but humans won't see
    const honeypot = document.createElement('input');
    honeypot.setAttribute('type', 'text');
    honeypot.setAttribute('name', 'website');
    honeypot.setAttribute('tabindex', '-1');
    honeypot.setAttribute('autocomplete', 'off');
    honeypot.style.position = 'absolute';
    honeypot.style.left = '-9999px';
    honeypot.style.width = '1px';
    honeypot.style.height = '1px';

    contactForm.insertBefore(honeypot, contactForm.firstChild);

    // Check honeypot on submit
    contactForm.addEventListener('submit', function(e) {
        if (honeypot.value !== '') {
            e.preventDefault();
            console.warn('Spam detected');
            return false;
        }
    }, true);
});
