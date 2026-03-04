const email = "hippomexico1@gmail.com";
const currentYear = new Date().getFullYear();
const subject = `School Interested in Participating in the ${currentYear} Hippo Contest`;

const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

const schoolEmailLink: string = mailtoLink;


export default schoolEmailLink;

