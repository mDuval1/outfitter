import { Text, View } from 'react-native';

import Section from '../components/Section';

type AddGarmentProps = {
  navigation: any;
};

const AddGarment = ({ navigation }: AddGarmentProps) => {
  return (
    <View>
      <Section title="Closet">
        <Text>Choose garment type</Text>
      </Section>
    </View>
  );
};

export default AddGarment;
