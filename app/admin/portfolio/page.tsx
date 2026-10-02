"use client";

import { useState } from "react";
import { useCMS } from "@/lib/cms-store";
import {
  SectionCard,
  FormField,
  TextInput,
  TextArea,
  ActionBar,
  SaveToast,
} from "@/components/admin/FormElements";
import { Plus, Trash2, ChevronDown, ChevronUp, ImageIcon } from "lucide-react";
import Image from "next/image";

export default function PortfolioEditor() {
  const { portfolio, updateSection, resetSection } = useCMS();
  const [form, setForm] = useState(portfolio);
  const [showToast, setShowToast] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const updateItem = (index: number, key: string, value: string) => {
    const updated = [...form];
    updated[index] = { ...updated[index], [key]: value };
    setForm(updated);
  };

  const addItem = () => {
    const newItem = {
      id: `port-${Date.now()}`,
      title: "",
      category: "Kitchen Set",
      imageUrl: "",
      description: "",
      client: "",
      year: new Date().getFullYear().toString(),
      location: "",
      size: "",
    };
    setForm([...form, newItem]);
    setExpandedIndex(form.length);
  };

  const removeItem = (index: number) => {
    setForm(form.filter((_, i) => i !== index));
    setExpandedIndex(null);
  };

  const handleSave = () => {
    updateSection("portfolio", form);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleReset = () => {
    resetSection("portfolio");
    window.location.reload();
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <SectionCard
        title="Proyek Portfolio"
        description={`Total: ${form.length} proyek`}
      >
        <div className="space-y-3">
          {form.map((item, index) => (
            <div
              key={item.id}
              className="border border-[#E8E1D8] rounded-lg overflow-hidden"
            >
              {/* Collapsed header */}
              <div
                role="button"
                tabIndex={0}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpandedIndex(expandedIndex === index ? null : index);
                  }
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#FAFAF8] hover:bg-[#F5F3F0] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {item.imageUrl ? (
                    <div className="relative w-8 h-8 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded bg-[#E8E1D8] flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="w-4 h-4 text-[#3A2F26]/30" />
                    </div>
                  )}
                  <div className="text-left">
                    <span className="text-sm font-sans font-medium text-[#3A2F26]/70 block">
                      {item.title || "Portfolio Baru"}
                    </span>
                    <span className="text-[10px] font-sans text-[#B08B57]/60">
                      {item.category} -- {item.year}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(index);
                    }}
                    className="p-1.5 text-[#3A2F26]/20 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-[#3A2F26]/30" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#3A2F26]/30" />
                  )}
                </div>
              </div>

              {/* Expanded content */}
              {expandedIndex === index && (
                <div className="px-4 py-5 space-y-4 border-t border-[#E8E1D8] bg-white">
                  <FormField label="Judul Proyek">
                    <TextInput
                      value={item.title}
                      onChange={(v) => updateItem(index, "title", v)}
                    />
                  </FormField>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField label="Kategori">
                      <TextInput
                        value={item.category}
                        onChange={(v) => updateItem(index, "category", v)}
                      />
                    </FormField>
                    <FormField label="Tahun">
                      <TextInput
                        value={item.year}
                        onChange={(v) => updateItem(index, "year", v)}
                      />
                    </FormField>
                    <FormField label="Klien">
                      <TextInput
                        value={item.client}
                        onChange={(v) => updateItem(index, "client", v)}
                      />
                    </FormField>
                    <FormField label="Lokasi">
                      <TextInput
                        value={item.location}
                        onChange={(v) => updateItem(index, "location", v)}
                      />
                    </FormField>
                    <FormField label="Ukuran">
                      <TextInput
                        value={item.size}
                        onChange={(v) => updateItem(index, "size", v)}
                      />
                    </FormField>
                  </div>

                  <FormField label="URL Gambar">
                    <TextInput
                      value={item.imageUrl}
                      onChange={(v) => updateItem(index, "imageUrl", v)}
                    />
                  </FormField>

                  <FormField label="Deskripsi">
                    <TextArea
                      value={item.description}
                      onChange={(v) => updateItem(index, "description", v)}
                      rows={3}
                    />
                  </FormField>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={addItem}
          className="flex items-center gap-2 text-[#B08B57] text-sm font-sans font-medium hover:text-[#C4A26F] transition-colors cursor-pointer mt-2"
        >
          <Plus className="w-4 h-4" />
          Tambah Portfolio
        </button>
      </SectionCard>

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
