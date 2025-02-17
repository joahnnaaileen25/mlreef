/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MTabs from 'components/ui/MTabs';
import MAccordion from 'components/ui/MAccordion';
import { fireModal } from 'store/actions/actionModalActions';
import icon from 'images/ml_reef_icon_01.svg';
import MDropdown from 'components/ui/MDropdown';
import MSelect from 'components/ui/MSelect';
import MProjectCard from './ui/MProjectCard/MProjectCard';
import MTooltip from 'components/ui/MTooltip';

// this is a component for testing layout and should be removed after alpha
const Demo = (props) => {
  //

  const [visibility, setVisibility] = useState(null);

  const [selectionAllowed, setSelectionAllowed] = useState(false);

  const handleFireModal = (type) => (e) => {
    const { actions } = props;

    if (type === 'danger') {
      const content = (
        <div style={{ textAlign: 'center' }}>
          <p>
            <strong>Are you sure you want to delete your dataset?</strong>
          </p>
          <p>You will free <strong>23Gb</strong> of cloud storage.</p>
          <p>You will loose all files generated by the pipeline.</p>
        </div>
      );

      return actions.fireModal({
        title: 'Deleting dataset from your repository',
        type: 'danger',
        closable: false,
        content,
      });
    }

    if (type === 'small') {
      return actions.fireModal({
        title: 'This is a small modal success',
        type: 'success',
        small: true,
        closable: true,
        content: (<img className="m-4" src={icon}/>),
        positiveLabel: `Let's Rock!`,
        negativeLabel: 'Get me Out!'
      });
    }
  }

  const btnClasses = [
    { label: 'primary', classes: 'btn btn-primary' },
    { label: 'secondary', classes: 'btn btn-secondary' },
    { label: 'success', classes: 'btn btn-success' },
    { label: 'info', classes: 'btn btn-info' },
    { label: 'warning', classes: 'btn btn-warning' },
    { label: 'danger', classes: 'btn btn-danger' },
    { label: 'dark', classes: 'btn btn-dark' },
    { label: 'light', classes: 'btn btn-light' },
  ];

  const btnBasicClasses = [
    { label: 'primary', classes: 'btn btn-basic-primary' },
    { label: 'secondary', classes: 'btn btn-basic-secondary' },
    { label: 'success', classes: 'btn btn-basic-success' },
    { label: 'info', classes: 'btn btn-basic-info' },
    { label: 'warning', classes: 'btn btn-basic-warning' },
    { label: 'danger', classes: 'btn btn-basic-danger' },
    { label: 'dark', classes: 'btn btn-basic-dark' },
    { label: 'light', classes: 'btn btn-basic-light' },
  ];

  const btnBasicDisabledClasses = [
    { label: 'primary', classes: 'disabled btn btn-basic-primary' },
    { label: 'secondary', classes: 'disabled btn btn-basic-secondary' },
    { label: 'success', classes: 'disabled btn btn-basic-success' },
    { label: 'info', classes: 'disabled btn btn-basic-info' },
    { label: 'warning', classes: 'disabled btn btn-basic-warning' },
    { label: 'danger', classes: 'disabled btn btn-basic-danger' },
    { label: 'dark', classes: 'disabled btn btn-basic-dark' },
    { label: 'light', classes: 'disabled btn btn-basic-light' },
  ];

  const btnDisabledClasses = [
    { label: 'primary', classes: 'disabled btn btn-primary' },
    { label: 'secondary', classes: 'disabled btn btn-secondary' },
    { label: 'success', classes: 'disabled btn btn-success' },
    { label: 'info', classes: 'disabled btn btn-info' },
    { label: 'warning', classes: 'disabled btn btn-warning' },
    { label: 'danger', classes: 'disabled btn btn-danger' },
    { label: 'dark', classes: 'disabled btn btn-dark' },
    { label: 'light', classes: 'disabled btn btn-light' },
  ];

  const btnBasicLgClasses = [
    { label: 'primary', classes: 'btn btn-lg btn-basic-primary' },
    { label: 'secondary', classes: 'btn btn-lg btn-basic-secondary' },
    { label: 'success', classes: 'btn btn-lg btn-basic-success' },
    { label: 'info', classes: 'btn btn-lg btn-basic-info' },
    { label: 'warning', classes: 'btn btn-lg btn-basic-warning' },
    { label: 'danger', classes: 'btn btn-lg btn-basic-danger' },
    { label: 'dark', classes: 'btn btn-lg btn-basic-dark' },
    { label: 'light', classes: 'btn btn-lg btn-basic-light' },
  ];

  const btnOutlineClasses = [
    { label: 'primary', classes: 'btn btn-outline-primary' },
    { label: 'secondary', classes: 'btn btn-outline-secondary' },
    { label: 'success', classes: 'btn btn-outline-success' },
    { label: 'info', classes: 'btn btn-outline-info' },
    { label: 'warning', classes: 'btn btn-outline-warning' },
    { label: 'danger', classes: 'btn btn-outline-danger' },
    { label: 'dark', classes: 'btn btn-outline-dark' },
    { label: 'light', classes: 'btn btn-outline-light' },
  ];

  const btnOutlineSmClasses = [
    { label: 'primary', classes: 'btn btn-sm btn-outline-primary' },
    { label: 'secondary', classes: 'btn btn-sm btn-outline-secondary' },
    { label: 'success', classes: 'btn btn-sm btn-outline-success' },
    { label: 'info', classes: 'btn btn-sm btn-outline-info' },
    { label: 'warning', classes: 'btn btn-sm btn-outline-warning' },
    { label: 'danger', classes: 'btn btn-sm btn-outline-danger' },
    { label: 'dark', classes: 'btn btn-sm btn-outline-dark' },
    { label: 'light', classes: 'btn btn-sm btn-outline-light' },
  ];

  const btnSquaredClasses = [
    { label: 'primary', classes: 'btn border-0 btn-primary' },
    { label: 'secondary', classes: 'btn border-0 btn-secondary' },
    { label: 'success', classes: 'btn border-0 btn-success' },
    { label: 'info', classes: 'btn border-0 btn-info' },
    { label: 'warning', classes: 'btn border-0 btn-warning' },
    { label: 'danger', classes: 'btn border-0 btn-danger' },
    { label: 'dark', classes: 'btn border-0 btn-dark' },
    { label: 'light', classes: 'btn border-0 btn-light' },
  ];

  const btnMiscClasses = [
    { label: 'default', classes: 'btn btn-default' },
    { label: 'switch', classes: 'btn btn-switch' },
    { label: '', classes: 'btn btn-danger btn-icon fa fa-times' },
    { label: '', classes: 'btn btn-success btn-icon fa fa-check' },
    { label: 'constant width', classes: 'btn btn-dark btn-label' },
    { label: 'const', classes: 'btn btn-dark btn-label' },
    { label: 'constant small', classes: 'btn btn-outline-dark btn-label-sm' },
    { label: 'const', classes: 'btn btn-outline-dark btn-label-sm' },
  ];


  const renderBtn = (i, index) => (
    <div key={`${i.classes}-${i.label}-${index}`}>
      <button className={i.classes}>
        {i.label && i.label}
      </button>
      <div className="mx-auto t-secondary t-center mt-1">
        {i.classes}
      </div>
    </div>
  );

  return (
    <div className="bg-light py-4 px-5" style={{
      height: '500px',
      width: '100%',
      maxWidth: '800px',
      margin: 'auto',
      marginTop: '100px'
    }}
    >
      version: 10000
      <MTabs>
        <MTabs.Section defaultActive id="buttons" label="The buttons">
          <br />
          <br />
          <br />
          <div>
            <button title="normal" className="btn btn-primary mr-2">
              Send
            </button>
            <button title="disabled" disabled className="btn btn-primary mr-2">
              Send
            </button>
            <button title="waiting" className="btn btn-primary waiting mr-2">
              Send
            </button>
            <button title="disabled while waiting" disabled className="btn btn-primary waiting mr-2">
              Send
            </button>
          </div>
          <br />
          <br />
          <div className="m-3">
            This is a simple tooltip
            <MTooltip
              simple
              className="ml-1"
              message="probando ando la la la lal al la llal la la lal al lal ala lal de de de ded eded e de de d e de d edededede"
            />
            <br />
            <br />
            This is showing upside
            <MTooltip className="ml-1" message="probando ando la la la lal al la llal la la lal al lal ala lal de de de ded eded e de de d e de d edededede" />
            <br />
            <br />
            And this is showing aside
            <MTooltip
              className="ml-1"
              position="right"
              message="probando ando la la la lal al la llal la la lal al lal ala lal de de de ded eded e de de d e de d edededede"
            />
          </div>

          <div>
            <h3 className="w-100">Card</h3>
            <div className="" style={{
                display: 'flex',
                flexWrap: 'wrap',
             }}>
              {[1, 2, 3, 4].map((i) => (
                /* card is here */
                <MProjectCard />
              ))
              // end of card
            }
            </div>
            <hr/>

            <h3 className="w-100">Misc</h3>
            <div className="btn-group border-thin">
              <button className="btn btn-secondary">
                Commit mode
              </button>
              <button className="btn btn-icon btn-outline-secondary fa fa-copy">
              </button>
              <button className="btn btn-icon btn-outline-secondary fa fa-folder">
              </button>
            </div>
            <hr/>
              <div className="btn-group border-thin">
                <button className="btn btn-secondary btn-label-sm">
                  pipeline_code
                </button>
                <button className="btn btn-outline-dark btn-label-sm">
                  View Pipeline
                </button>
              </div>
              <hr/>
                <div className="">
                  <div className="d-inline-flex">
                    <MDropdown
                      items={[
                        { content: (
                          <div className="py-2">
                            <div className="mb-1">New Branch</div>
                            <div className="t-secondary">Only new data is saved</div>
                          </div>
                        )},
                        { content: (
                          <div className="py-2">
                            <div className="mb-1">Create ull request</div>
                            <div className="t-secondary">New data and original data...</div>
                          </div>
                        )},
                      ]}
                      listTitle="Save data instance"
                      label="Save" buttonClasses="btn btn-success px-2"
                      className="mr-2"
                    />
                  </div>
                  <button className="btn btn-icon btn-danger fa fa-times mr-2">
                  </button>
                  <button className="btn btn-icon  btn-outline-dark btn-label-sm">
                    View Pipeline
                  </button>
                </div>
                <hr/>

                <div className="">
                  <button className="btn btn-danger btn-label-sm mr-2">
                    Abort
                  </button>
                  <button className="btn btn-outline-dark btn-label-sm">
                    View Pipeline
                  </button>
                </div>
                <hr/>

                <div className="w-50 d-flex">
                  <button
                    className={`btn btn-switch btn-icon fa fa-lock mr-3 mb-2 px-3 ${!selectionAllowed ? 'active' : ''}`}
                    active={selectionAllowed}
                    onClick={() => setSelectionAllowed(!selectionAllowed)}
                  />
                  <MSelect
                    disabled={!selectionAllowed}
                    variant="secondary"
                    label="Project visibility"
                    value={visibility}
                    options={[
                      { label: 'Public', value: 1 },
                      { label: 'Private', value: 2 }
                    ]}
                    onSelect={setVisibility}
                  />
                </div>
                <hr/>
          </div>

          <div>
            <h3 className="w-100">Misc</h3>
            <div className="demo-buttons">
              {btnMiscClasses.map(renderBtn)}
            </div>
            <hr/>
          </div>

          <div>
            <h3 className="w-100">Standard</h3>
            <div className="demo-buttons">
              {btnClasses.map(renderBtn)}
            </div>
            <hr/>
          </div>

          <div>
            <h3 className="w-100">Standard disabled</h3>
            <div className="demo-buttons">
              {btnDisabledClasses.map((i, index) => (
                <div key={`${i.classes}-${i.label}-${index}`}>
                  <button className={i.classes} disabled>
                    {i.label && i.label}
                  </button>
                  <div className="mx-auto t-secondary t-center mt-1">
                    {i.classes}
                  </div>
                </div>
              ))}
            </div>
            <hr/>
          </div>

          <div>
            <h3 className="w-100">Basic</h3>
            <div className="demo-buttons">
              {btnBasicClasses.map(renderBtn)}
            </div>
            <hr/>
          </div>

          <div>
            <h3 className="w-100">Basic Disabled</h3>
            <div className="demo-buttons">
              {btnBasicDisabledClasses.map(renderBtn)}
            </div>
            <hr/>
          </div>

          <div>
            <h3 className="w-100">Outline</h3>
            <div className="demo-buttons">
              {btnOutlineClasses.map(renderBtn)}
            </div>
            <hr/>
          </div>

          <div>
            <h3 className="w-100">Squared</h3>
            <div className="demo-buttons">
              {btnSquaredClasses.map(renderBtn)}
            </div>
            <hr/>
          </div>

          <div>
            <h3 className="w-100">Outline Small</h3>
            <div className="demo-buttons">
              {btnOutlineSmClasses.map(renderBtn)}
            </div>
            <hr/>
          </div>

          <div>
            <h3 className="w-100">Basic Large</h3>
            <div className="demo-buttons">
              {btnBasicLgClasses.map(renderBtn)}
            </div>
            <hr/>
          </div>
        </MTabs.Section>

        <MTabs.Section id="modal" label="Modals">
          <div>
            <h3 className="w-100">Misc</h3>
            <div className="demo-buttons">
              <div>
                <h3 className="w-100">Modal danger</h3>
                <button onClick={handleFireModal('danger')} className="btn btn-outline-danger">
                  Fire Modal
                </button>
                <div className="mx-auto t-secondary t-center mt-1">
                  modal
                </div>
              </div>

              <div>
                <h3 className="w-100">Small modal success</h3>
                <button onClick={handleFireModal('small')} className="btn btn-outline-info border-0">
                  Fire Modal
                </button>
                <div className="mx-auto t-secondary t-center mt-1">
                  modal
                </div>
              </div>

              <div>
                <h3 className="w-100">Modal danger</h3>
                <button onClick={handleFireModal('')} className="btn btn-primary border-solid">
                  Fire Modal
                </button>
                <div className="mx-auto t-secondary t-center mt-1">
                  modal
                </div>
              </div>


            </div>
            <hr/>
          </div>
        </MTabs.Section>

        <MTabs.Section id="roles" label="The Roles">
          <MAccordion>
            <MAccordion.Item
              title="Naming, topics, avatar"
              subtitle="Update your project name, topics and avatar"
            >
            <div className="row">
              <div className="col-3 bg-secondary h-100">XXX</div>
              <div className="col-6">XXX</div>
              <div className="col-3 bg-secondary">XXX</div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </MAccordion.Item>

            <MAccordion.Item
              title="Visibility, project features, permissions"
              subtitle="Choose visibility level, enable/disable project features and set permissions"
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </MAccordion.Item>

            <MAccordion.Item
              title="Merge requests"
              subtitle="Choose your merge method, merge options, merge checks, merge suggestions, and setup a default description template for merge requests."
            >
              hey
            </MAccordion.Item>

            <MAccordion.Item
              title="Merge request approvals"
              subtitle={(
                <span>Set a number of approvals required, the approvers and other approval settings.
                  <Link to="/"> Learn more about approvals</Link>
                </span>
              )}
            >
              you
            </MAccordion.Item>

            <MAccordion.Item
              title="Advanced"
              subtitle="Housekeeping, export path, transfer, remove, archive"
            >
              ja
            </MAccordion.Item>
          </MAccordion>
        </MTabs.Section>

        <MTabs.Section id="misc" label="Other Stuff">
          <MTabs vertical>
            <MTabs.Section id="roles" label="The Roles">
              hola
            </MTabs.Section>
            <MTabs.Section
              id="permission"
              label="My Permissions"
            >
              per
            </MTabs.Section>
            <MTabs.Section defaultActive id="misc" label="Other Stuff">
              <h2>This is a test 2 </h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </MTabs.Section>
          </MTabs>
        </MTabs.Section>
      </MTabs>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fireModal: bindActionCreators(fireModal, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(Demo);
