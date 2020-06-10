let _editorSDK;
let _token;

const APP_DEF_ID = 'bca3778a-e4a5-4ac7-9e67-e15b78601984' //TODO: change to the appDefId of of your app from dev center
const WIDGET_DEV_CENTER_ID = '21519186-ab23-40b4-beda-cdfb5ac87740'; //TODO: change to the widget id (guid) of of your widget from dev center
const WIDGET_APP_BUILDER_ID = 'ma76t'; //TODO: change to the id of the page of your widget from app builder
const CONTROLLER_TYPE = APP_DEF_ID + '-' + WIDGET_APP_BUILDER_ID;

const editorReady = (editorSDK, token, {firstInstall}) => {
  _editorSDK = editorSDK;
  _token = token;

//|| !await controllerAlreadyExists(CONTROLLER_TYPE)
  if (firstInstall) {``
    console.log('Creating missing widget by ref!');

    const pageRef = editorSDK.pages.getCurrent(token).then ((pageRef) => {
          const componentDefinition = {
            componentType: 'wysiwyg.viewer.components.RefComponent',
            data: {
              type: 'WidgetRef',
              appDefinitionId: APP_DEF_ID,
              widgetId: WIDGET_DEV_CENTER_ID
            }
          }
          console.log('Creating missing widget by ref@');

          editorSDK.document.components.add("token", {componentDefinition, pageRef: pageRef});
          console.log('Creating missing widget by ref#');
      }
    );


  }
};


const getAppManifest = () => {
  return {
    controllersStageData: {
      [CONTROLLER_TYPE]: {
        "default": {
          "behavior": {
            closable: true,
          },
          "gfpp": {
            "desktop": {
              "mainAction1": {
                "label": "App Set!",
                "actionId": "openSettingClicked",
              }
            }
          },
          "connections": {
            "title": {  //componentRole
              "gfpp": {
                "desktop": {
                  "mainAction2": {
                    "label": "Send Text To Console",
                    "actionId": "sendTextToConsole",
                  }
                }
              }
            }
          }
        }
      }
    }
  };
};


// async function controllerAlreadyExists(controllerType) {
//   const controllers = await _editorSDK.controllers.listAllControllers(_token);
//   for (const controller of controllers) {
//     const data = await _editorSDK.controllers.getData(_token, controller);
//     if (data.controllerType === controllerType) {
//       return true;
//     }
//   }
//   return false;
// }

module.exports = {
  editorReady,
  getAppManifest
};
