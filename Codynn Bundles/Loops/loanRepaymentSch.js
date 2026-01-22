function generate_repayment_schedule(A, P, R) {
  monthCount = 1;
  while (A > 0) {
    I = A * R;
    A = A - P + I;
    if (A > 0) {
      console.log(`Month ${monthCount++}: Remaining balance = ${A.toFixed(2)}`);
    } else {
      console.log(`Month ${monthCount++}: Remaining balance = 0.00`);
    }
  }
}
