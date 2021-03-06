import {mapWires, resolveCircuit} from './circuit';

export default function wiresSolution(data) {
  const circuit = mapWires(data);
  resolveCircuit(circuit);
  return circuit.a;
}
