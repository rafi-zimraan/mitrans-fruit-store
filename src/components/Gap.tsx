import {DimensionValue, View} from 'react-native';

type GapType = {
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  flex?: number | undefined;
};

export default function Gap({width = 0, height = 0, flex}: GapType) {
  return <View style={{height, width, flex}} />;
}
