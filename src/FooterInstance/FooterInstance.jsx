import React from 'react';

function FooterInstance() {
    const [
      includeFooter,
      setIncludeFooter,
    ] = React.useState(false);
  
    return (
      <>
        <form className="footer-toggle-wrapper">
          <input
            type="checkbox"
            id="footer-toggle"
            checked={includeFooter}
            onChange={(event) => {
              setIncludeFooter(event.target.checked);
            }}
          />
          <label htmlFor="footer-toggle">
            Toggle Footer
          </label>
        </form>
        {includeFooter && <Footer />}
      </>
    );
  }
  
  function Footer() {
    const [
      backgroundColor,
      setBackgroundColor,
    ] = React.useState('#232538');
  
    return (
      <footer style={{ backgroundColor }}>
        <form>
          <label htmlFor="bg-picker">
            Tweak background:
          </label>
          <input
            type="color"
            id="bg-picker"
            value={backgroundColor}
            onChange={(event) => {
              setBackgroundColor(event.target.value);
            }}
          />
        </form>
        <p>
          © Some Application Inc., 1998-present. All
          Rights Reserved.
        </p>
      </footer>
    );
  }

export default FooterInstance;