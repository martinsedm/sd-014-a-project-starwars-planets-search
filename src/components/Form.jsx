import React from 'react';
import NameFilter from './NameFilter';
import ValueFilter from './ValueFilter';

class Form extends React.Component {
  render() {
    return (
      <form>
        <section>
          <NameFilter />
        </section>
        <section>
          <ValueFilter />
        </section>
      </form>
    );
  }
}

export default Form;
