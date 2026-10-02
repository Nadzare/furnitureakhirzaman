"use client";

import { useState } from "react";
import { useCMS } from "@/lib/cms-store";
import {
  SectionCard,
  FormField,
  TextInput,
  ActionBar,
  SaveToast,
} from "@/components/admin/FormElements";

export default function StatisticsEditor() {
  const { statistics, updateSection, resetSection } = useCMS();
  const [form, setForm] = useState(statistics);
  const [showToast, setShowToast] = useState(false);

  const updateStat = (index: number, key: string, value: string) => {
    const updated = [...form];
    updated[index] = { ...updated[index], [key]: value };
    setForm(updated);
  };

  const handleSave = () => {
    updateSection("statistics", form);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleReset = () => {
    resetSection("statistics");
    window.location.reload();
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {form.map((stat, index) => (
        <SectionCard
          key={stat.id}
          title={`Statistik ${index + 1}`}
          description={`ID: ${stat.id}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField label="Nilai" hint="Contoh: 500+, 7+, 100%">
              <TextInput
                value={stat.value}
                onChange={(v) => updateStat(index, "value", v)}
              />
            </FormField>

            <FormField label="Label">
              <TextInput
                value={stat.label}
                onChange={(v) => updateStat(index, "label", v)}
              />
            </FormField>

            <FormField label="Sub Label" hint="Opsional">
              <TextInput
                value={stat.subLabel || ""}
                onChange={(v) => updateStat(index, "subLabel", v)}
              />
            </FormField>

            <FormField label="Nama Icon" hint="Lucide React icon name">
              <TextInput
                value={stat.iconName}
                onChange={(v) => updateStat(index, "iconName", v)}
              />
            </FormField>
          </div>
        </SectionCard>
      ))}

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
