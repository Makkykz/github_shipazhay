// НОВЫЙ КОД: Обработка отправки формы для перехода на страницу подтверждения
const bookingForm = document.getElementById('bookingFormStatic');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Отменяем стандартное поведение отправки формы
        // Просто перенаправляем на страницу подтверждения
        window.location.href = 'booking_confirmation.html';
    });
}