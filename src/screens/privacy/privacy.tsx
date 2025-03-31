import {Text} from '@/components';
import {sizing} from '@/theme';
import {ScrollView, ViewStyle} from 'react-native';

export const PrivacyScreen = () => {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={$container}>
      <Text weight="bold" size="lg">
        Maxfiylik siyosati
      </Text>
      <Text weight="medium" style={{marginBottom: sizing.sm}}>
        Biz sizning shaxsiy ma'lumotlaringizni jiddiy hurmat qilamiz va ularni
        maksimal darajada xavfsiz saqlashga intilamiz. Ushbu maxfiylik siyosati
        sizning shaxsiy ma'lumotlaringizni qanday to'plaganimiz, saqlashimiz va
        ulardan qanday foydalanishimizni tushuntiradi.
      </Text>
      <Text weight="medium" style={{marginBottom: sizing.sm}}>
        1. Shaxsiy ma'lumotlarni to'plash Biz sizdan shaxsiy ma'lumotlarni faqat
        zarur bo'lgan hollarda to'playmiz. Bu ma'lumotlar sizning biz bilan
        aloqada bo'lishingizni yoki xizmatlarimizdan foydalanishingizni
        yaxshilash uchun ishlatiladi. Bunga ismingiz, aloqalar ma'lumotlaringiz,
        elektron pochta manzilingiz va boshqa tegishli ma'lumotlar kiradi.
      </Text>
      <Text weight="medium" style={{marginBottom: sizing.sm}}>
        2. Shaxsiy ma'lumotlarni saqlash va himoya qilish Biz to'plangan shaxsiy
        ma'lumotlaringizni xavfsiz saqlash va ularga ruxsatsiz kirishni oldini
        olish uchun barcha zarur choralarni ko'ramiz. Ma'lumotlaringiz faqat
        kerakli muddatgacha saqlanadi va undan faqat maqsadga muvofiq
        foydalaniladi.
      </Text>
    </ScrollView>
  );
};
const $container: ViewStyle = {
  padding: sizing.md,
};
