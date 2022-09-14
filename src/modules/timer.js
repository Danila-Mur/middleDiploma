const timer = (deadline) => {
  const timerDays = document.querySelector('.count_1 span'),
    timerHours = document.querySelector('.count_2 span'),
    timerMinutes = document.querySelector('.count_3 span'),
    timerSeconds = document.querySelector('.count_4 span');
  let interval;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    const formatDays = days < 10 ? '0' + days : days;
    const formatHours = hours < 10 ? '0' + hours : hours;
    const formatMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formatSeconds = seconds < 10 ? '0' + seconds : seconds;

    return {
      timeRemaining,
      formatDays,
      formatHours,
      formatMinutes,
      formatSeconds,
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerDays.textContent = getTime.formatDays;
    timerHours.textContent = getTime.formatHours;
    timerMinutes.textContent = getTime.formatMinutes;
    timerSeconds.textContent = getTime.formatSeconds;

    if (getTime.timeRemaining < 0) {
      clearInterval(interval);
      timerDays.textContent = '00'
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  };

  updateClock();
  interval = setInterval(updateClock, 1000);
};

export default timer;
