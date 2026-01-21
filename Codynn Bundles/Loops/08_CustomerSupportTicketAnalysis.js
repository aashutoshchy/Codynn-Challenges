function analyze_support_tickets(response_times, target_time) {
  let average = 0;
  let totalTime = 0;
  resolvedCount = 0;
  let count = 0;
  let respn = response_times.length;
  for (let i = 0; i < respn; i++) {
    totalTime += response_times[i];
  }
  average = totalTime / respn;
  for (let i = 0; i < respn; i++) {
    count += response_times[i] <= target_time ? 1 : 0;
  }
  console.log(`Average response time: ${average.toFixed(1)} minutes`);
  console.log(
    `Tickets resolved within target time (<= ${target_time} minutes): ${count}`,
  );
}
