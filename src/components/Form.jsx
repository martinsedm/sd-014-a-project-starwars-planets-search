import React from 'react';
import NameFilter from './NameFilter';

class Form extends React.Component {
  render() {
    return (
      <form>
        <section>
          <NameFilter />
        </section>
      </form>
    );
  }
}

export default Form;
