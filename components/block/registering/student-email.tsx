const email = "hippomexico1@gmail.com";
const currentYear = new Date().getFullYear();
const studentSubject = `Interest to Participate in the ${currentYear} Hippo Contest as a Student`;

const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(studentSubject)}`;

const studentEmailLink: string = mailtoLink;


export default studentEmailLink;
