const Footer = () => {
  return (
    <div className="bg-slate-800 py-4 px-8 w-full flex justify-between items-center">
      <div className="text-slate-50">
        <ul className="flex gap-4">
          <li>About Us</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="text-slate-50">
        <ul className="flex gap-4">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Refund Policy</li>
        </ul>
      </div>
      <div className="text-slate-50">
        <ul className="flex gap-4">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <span className="text-slate-50">Made with ❤ by Vijay Mahadevan.</span>
    </div>
  );
};

export default Footer;
