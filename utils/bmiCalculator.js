const calculateBMI = (weight, height) => {

    const heightInMeters = height / 100;

    const bmi =
        weight /
        (heightInMeters * heightInMeters);

    return Number(bmi.toFixed(1));
};

module.exports = calculateBMI;