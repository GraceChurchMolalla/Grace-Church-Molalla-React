import React from 'react'

import PropTypes from 'prop-types'

const PrimaryBlueButton = (props) => {
  return (
    <>
      <div className={`primary-blue-button-container ${props.rootClassName} `}>
        <button className="primary-blue-button-button button buttonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .primary-blue-button-container {
            display: flex;
            position: relative;
          }
          .primary-blue-button-button {
            color: var(--dl-color-gray-white);
            outline: none;
            background: linear-gradient(310deg, #2152ff, #21d4fd);
            box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%),
              0 2px 4px -1px rgb(0 0 0 / 7%);
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
          }
          .primary-blue-button-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
          .primary-blue-button-root-class-name {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
        `}
      </style>
    </>
  )
}

PrimaryBlueButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

PrimaryBlueButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default PrimaryBlueButton
