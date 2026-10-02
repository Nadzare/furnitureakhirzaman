"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useCMS } from "@/lib/cms-store";
import {
  SectionCard,
  FormField,
  TextInput,
  TextArea,
  ActionBar,
  SaveToast,
} from "@/components/admin/FormElements";
import { Plus, Trash2, GripVertical, Image as ImageIcon } from "lucide-react";

export default function AboutEditor() {
  const { about, updateSection, resetSection } = useCMS();
  const [form, setForm] = useState(about);
  const [showToast, setShowToast] = useState(false);

  const update = useCallback(
    (key: string, value: any) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const updateHighlight = (index: number, value: string) => {
    const updated = [...form.highlights];
    updated[index] = value;
    update("highlights", updated);
  };

  const addHighlight = () => {
    update("highlights", [...form.highlights, ""]);
  };

  const removeHighlight = (index: number) => {
    update(
      "highlights",
      form.highlights.filter((_: string, i: number) => i !== index)
    );
  };

  const updateImage = (index: number, key: string, value: string) => {
    const updated = [...form.images];
    updated[index] = { ...updated[index], [key]: value };
    update("images", updated);
  };

  const handleSave = () => {
    updateSection("about", form);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleReset = () => {
    resetSection("about");
    window.location.reload();
  };

  return (
    <div className="space-y-6 max-w-4xl min-w-0">
      <SectionCard
        title="Konten Teks"
        description="Heading, subtitle, dan paragraf deskripsi section About."
      >
        <FormField label="Subtitle">
          <TextInput
            value={form.subtitle}
            onChange={(v) => update("subtitle", v)}
          />
        </FormField>

        <FormField label="Heading">
          <TextInput
            value={form.heading}
            onChange={(v) => update("heading", v)}
          />
        </FormField>

        <FormField label="Paragraf 1">
          <TextArea
            value={form.description1}
            onChange={(v) => update("description1", v)}
            rows={3}
          />
        </FormField>

        <FormField label="Paragraf 2">
          <TextArea
            value={form.description2}
            onChange={(v) => update("description2", v)}
            rows={3}
          />
        </FormField>

        <FormField label="Teks Tombol CTA">
          <TextInput
            value={form.ctaText}
            onChange={(v) => update("ctaText", v)}
          />
        </FormField>
      </SectionCard>

      <SectionCard
        title="Highlight Keunggulan"
        description="Poin-poin singkat keunggulan perusahaan."
      >
        <div className="space-y-2.5 sm:space-y-3">
          {form.highlights.map((highlight: string, index: number) => (
            <div key={index} className="flex items-center gap-2 sm:gap-3">
              <GripVertical className="w-4 h-4 text-[#3A2F26]/30 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <TextInput
                  value={highlight}
                  onChange={(v) => updateHighlight(index, v)}
                  placeholder={`Keunggulan ${index + 1}`}
                />
              </div>
              <button
                onClick={() => removeHighlight(index)}
                aria-label={`Hapus highlight ${index + 1}`}
                className="p-2.5 sm:p-2 text-[#3A2F26]/30 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            onClick={addHighlight}
            className="flex items-center gap-2 text-[#B08B57] text-sm font-sans font-medium hover:text-[#C4A26F] transition-colors cursor-pointer mt-2 pt-1"
          >
            <Plus className="w-4 h-4" />
            Tambah Highlight
          </button>
        </div>
      </SectionCard>

      <SectionCard
        title="Gambar Kolase"
        description="Tiga gambar yang ditampilkan secara overlapping di landing page."
      >
        <div className="space-y-4 sm:space-y-6">
          {form.images.map((img: { src: string; alt: string }, index: number) => (
            <div
              key={index}
              className="space-y-3 pb-4 sm:pb-5 border-b border-[#E8E1D8] last:border-b-0 last:pb-0"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-bold text-[#B08B57] uppercase tracking-wider">
                  Gambar {index + 1}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                {img.src ? (
                  <div className="relative w-full sm:w-24 h-32 sm:h-24 rounded-lg overflow-hidden border border-[#E8E1D8] bg-[#F5F3F0] flex-shrink-0">
                    <Image
                      src={img.src}
                      alt={img.alt || "Preview"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 96px"
                    />
                  </div>
                ) : (
                  <div className="w-full sm:w-24 h-24 rounded-lg border border-[#E8E1D8] bg-[#F5F3F0] flex items-center justify-center flex-shrink-0 text-[#3A2F26]/30">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                )}

                <div className="flex-1 w-full space-y-3 min-w-0">
                  <FormField label="URL Gambar">
                    <TextInput
                      value={img.src}
                      onChange={(v) => updateImage(index, "src", v)}
                      placeholder="https://images.unsplash.com/..."
                    />
                  </FormField>
                  <FormField label="Alt Text">
                    <TextInput
                      value={img.alt}
                      onChange={(v) => updateImage(index, "alt", v)}
                      placeholder="Deskripsi gambar..."
                    />
                  </FormField>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
