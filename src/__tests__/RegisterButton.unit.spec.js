import React from 'react';
import { mount } from 'enzyme';

import RegisterButton from '../components/RegisterButton';
import Button from '../components/Button';

describe('<RegisterButton />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <RegisterButton
        name="abcd"
        label="REGISTER"
      />
    );
  })

  afterAll(() => {
    wrapper.unmount();
  });

  it('renders Button Component', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  describe('when url is not provided', () => {
    it('Button id prop has value', () => {
      expect(wrapper.find(Button).html()).toContain('id');
    });

    it('Button id prop has the expected value', () => {
      const expectedId = 'btn-abcd';
      expect(wrapper.find(Button).props().id).toBe(expectedId);
    })

    describe('when clicks', () => {
      beforeEach(() => {
        window.open = jest.fn();
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('not calls window.open function', () => {
        wrapper.find('button').simulate('click');
        expect(window.open).not.toHaveBeenCalled();
      })
    })
  });

  describe('when url is provided', () => {
    beforeEach(() => {
      wrapper.setProps({ url: 'http://google.com' });
    });

    it('Button id prop is null', () => {
      expect(wrapper.find(Button).html()).not.toContain('id');
    });

    describe('when clicks', () => {
      beforeEach(() => {
        window.open = jest.fn();
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('calls to window open function', () => {
        wrapper.find('button').simulate('click');
        expect(window.open).toHaveBeenCalled();
        expect(window.open).toHaveBeenCalledWith('http://google.com', '_blank', 'noopener,norefer');
      })
    })
  })
});