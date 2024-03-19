import { FlumeConfig, Colors, Controls } from 'flume';

import { TestComponent } from './TestComponent';

const FlmConfig = new FlumeConfig()
  .addPortType({
    type: 'source',
    name: 'source',
    label: 'Source',
    color: Colors.green,
    controls: [
      Controls.custom({
        name: 'source',
        label: 'Source',
        defaultValue: '',
        render: () => (
          <TestComponent />
          // <RandomPhotoComponent
          //   url={data}
          //   onChange={onChange}
          // />
        ),
      }),
    ],
  })
  .addPortType({
    type: 'boolean',
    name: 'boolean',
    label: 'True/False',
    color: Colors.blue,
    controls: [
      Controls.checkbox({
        name: 'boolean',
        label: 'True/False',
      }),
    ],
  })
  .addPortType({
    type: 'number',
    name: 'number',
    label: 'Number',
    color: Colors.red,
    controls: [
      Controls.number({
        name: 'number',
        label: 'Number',
      }),
    ],
  })
  .addNodeType({
    type: 'source',
    label: 'Source',
    description: 'The source to ingest',
    outputs: (ports) => [ports.source()],
  })
  .addNodeType({
    type: 'boolean',
    label: 'True/False',
    description: 'Outputs a true/false value',
    initialWidth: 140,
    inputs: (ports) => [ports.boolean()],
    outputs: (ports) => [ports.boolean()],
  })
  .addNodeType({
    type: 'number',
    label: 'Number',
    description: 'Outputs a numeric value',
    initialWidth: 160,
    inputs: (ports) => [ports.number()],
    outputs: (ports) => [ports.number()],
  });

export default FlmConfig;
