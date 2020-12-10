
export function handleAgeValidation(age) {
    if (age <= 0) {
        return 'Age cannot be less than or equal to zero'
    } else {
        return '';
    }
}