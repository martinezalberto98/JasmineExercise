
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 100000, years: 30, rate: 7};
  expect(calculateMonthlyPayment(values)).toEqual('665.30');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 200000, years: 30, rate: 7};
  expect(calculateMonthlyPayment(values)).toEqual('1330.60');
});


