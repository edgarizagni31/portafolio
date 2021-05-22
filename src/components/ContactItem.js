export const ContactItem = ({ link, icon, user }) => {
  return (
    <div className = 'contact__item'>
      <p className = 'contact__icon'> {icon} </p>
      <a href={link} className = 'contact__text'> {user}  </a>
    </div>
  );
};
