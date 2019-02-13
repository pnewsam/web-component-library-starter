import { css } from 'lit-element';

export default css`
* {
  box-sizing: border-box;
}

:host {
  display: block;
  font-family: sans-serif;
  position: relative;
  float: left
}

.button {
  align-items: center;
  border-radius: 30px;
  border: 1px solid purple;
  color: purple;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  padding: 15px 20px;
  position: relative;
  text-transform: lowercase;
  float: left;
}

.button:hover {
  background: purple;
  border-color: purple;
  color: white;
}

.down-arrow {
  font-size: 30px;
  line-height: 10px;
  margin-left: 20px;
}

.dropdown-content {
  display: none;
  box-shadow: 2px 4px 20px 1px purple;
  position: absolute;
  right: 4px;
  top: calc(100% + 6px);
  color: purple;
}

.active {
  display: block;
}
`;
