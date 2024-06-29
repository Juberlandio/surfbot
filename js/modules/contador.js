export default function contador() {
document.addEventListener('DOMContentLoaded', function() {
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  function updateCountdown() {
      const today = new Date();
      const nextMonthDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate(), 0, 0, 0);

      const difference = nextMonthDate - today;
      const totalSeconds = Math.floor(difference / 1000);

      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      daysElement.textContent = formatTime(days);
      hoursElement.textContent = formatTime(hours);
      minutesElement.textContent = formatTime(minutes);
      secondsElement.textContent = formatTime(seconds);
  }

  function formatTime(time) {
      return time < 10 ? `0${time}` : time;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
}
