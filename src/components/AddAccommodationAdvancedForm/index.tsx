import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, Text } from "react-native";

import { CompositionSection } from "../Compositions";
import { Input, InputControl, InputCotrolLabel } from "../Forms";

export default function AddAccommodationAdvancedForm() {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      city: "",
      country: "",
      accommodationType: "",
      fullBedCount: 0,
      childBedCount: 0,
      accommodationTime: 0,
    },
  });

  const onSubmit = (data) => {
    // TODO: implement
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={styles.containerWraper}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <CompositionSection
          padding={[35, 30, 8, 30]}
          header="Podaj informacje na temat noclegu który oferujesz"
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputControl>
                <InputCotrolLabel>{t("hostAdd.country")}</InputCotrolLabel>
                <Input
                  placeholder={t("hostAdd.country")}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.country}
                />
                {errors.country && (
                  <Text style={styles.error}>{t("hostAdd.countryError")}</Text>
                )}
              </InputControl>
            )}
            name="country"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputControl>
                <InputCotrolLabel>{t("hostAdd.city")}</InputCotrolLabel>
                <Input
                  placeholder={t("hostAdd.city")}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.city}
                />
                {errors.city && (
                  <Text style={styles.error}>{t("hostAdd.cityError")}</Text>
                )}
              </InputControl>
            )}
            name="city"
          />
        </CompositionSection>
        <CompositionSection padding={[35, 30, 8, 30]} backgroundColor="#F5F4F4">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputControl>
                <InputCotrolLabel>{t("hostAdd.type")}</InputCotrolLabel>
                <Input
                  placeholder={t("hostAdd.type")}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.accommodationType}
                />
                {errors.accommodationType && (
                  <Text style={styles.error}>{t("hostAdd.typeError")}</Text>
                )}
              </InputControl>
            )}
            name="accommodationType"
          />
          {/* Image Picker usage here */}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputControl>
                <InputCotrolLabel>{t("hostAdd.fullBedCount")}</InputCotrolLabel>
                <Input
                  placeholder={t("hostAdd.fullBedCount")}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.fullBedCount}
                />
                {errors.fullBedCount && (
                  <Text style={styles.error}>
                    {t("hostAdd.fullBedCountError")}
                  </Text>
                )}
              </InputControl>
            )}
            name="fullBedCount"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputControl>
                <InputCotrolLabel>
                  {t("hostAdd.childBedCount")}
                </InputCotrolLabel>
                <Input
                  placeholder={t("hostAdd.childBedCount")}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.childBedCount}
                />
                {errors.childBedCount && (
                  <Text style={styles.error}>
                    {t("hostAdd.childBedCountError")}
                  </Text>
                )}
              </InputControl>
            )}
            name="childBedCount"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputControl>
                <InputCotrolLabel>
                  {t("hostAdd.accommodationTime")}
                </InputCotrolLabel>
                <Input
                  placeholder={t("hostAdd.accommodationTime")}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.accommodationTime}
                />
                {errors.accommodationTime && (
                  <Text style={styles.error}>
                    {t("hostAdd.accommodationTimeError")}
                  </Text>
                )}
              </InputControl>
            )}
            name="accommodationTime"
          />
        </CompositionSection>
      </form>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
  },
  error: {
    color: "#D8000C",
    marginTop: 10,
  },
  containerWraper: {
    width: "100%",
  },
  input: {
    marginTop: 20,
  },
});
