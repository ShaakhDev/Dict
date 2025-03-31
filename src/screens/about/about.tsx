import {Text} from '@/components';
import {sizing} from '@/theme';
import {ScrollView, ViewStyle} from 'react-native';

export const AboutScreen = () => {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={$container}>
      <Text weight="medium" style={{marginBottom: sizing.sm}}>
        Loyiha maqsadi: o‘zbek tili gastronomik terminologiyasida o‘zlashib
        borayotgan neologizmlar (yangi so‘zlar) elektron izohli lug‘atini
        yaratish. Muammo doirasida loyihada yechiladigan aniq amaliy masala.
        O‘zbek tilining o‘zlashma gastronimlar terminologik izohli lug‘ati
        elektron ko‘rinishda ilk marotoba  yaratiladi. Ushbu korpus mukammal
        (morfologik, semantik, sintaktik) razmetkalangan, elektron kutubxona va
        lug‘at sifatida lingvistik baza vazifasini bajaradi. Zamonaviy keng
        imkoniyatli dasturlashtirilgan tizim asosida yaratilgan korpus internet
        tarmog‘idan joy oladi.
      </Text>
      <Text weight="medium" style={{marginBottom: sizing.sm}}>
        Gastronimlar (gastronomik atamalar) lug‘atlashtirilishi natijasida
        o‘zbek tilining leksik jihatdan boy ekanligi isbotlanadi. O‘zbek tilida
        ish yuritayotgan ziyoli qatlam, ya'ni foydalanuvchi (filolog, jurnalist,
        tarjimon, o‘qituvchi, oliygoh talabasi, maktab o‘quvchisi va so‘z bilan
        ishlaydigan barcha xodim) uchun juda qulay (vaqt tejaladi), zarur vosita
        yaratiladi.
      </Text>
    </ScrollView>
  );
};

const $container: ViewStyle = {
  padding: sizing.md,
};
