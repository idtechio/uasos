import React from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, Text } from "react-native";
import { CompositionSection } from "../Compositions";
import { Input, InputControl, InputCotrolLabel } from "../Forms";

export default function AddAccommodationAdvancedForm() {
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
                <InputCotrolLabel>Kraj</InputCotrolLabel>
                <Input
                  placeholder="Kraj"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.country}
                />
                {errors.country && <Text style={styles.error}>Kraj</Text>}
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
                <InputCotrolLabel>Miasto</InputCotrolLabel>
                <Input
                  placeholder="Kraj"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.city}
                />
                {errors.city && <Text style={styles.error}>Miasto</Text>}
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
                <InputCotrolLabel>Typ noclegu</InputCotrolLabel>
                <Input
                  placeholder="Kraj"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.accommodationType}
                />
                {errors.accommodationType && (
                  <Text style={styles.error}>Typ noclegu</Text>
                )}
              </InputControl>
            )}
            name="accommodationType"
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
