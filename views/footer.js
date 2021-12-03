module.exports = (req, res, data, user, opts) => {
  return `
  <div class="footer_bottom">
      <div class="left">
      This is the footer!
          <a href="#">${res.locals.__("Hello")}</a>
      </div>
      <div class="right">
          Copyright © ${new Date()}
      </div>
  </div>
`;
};
