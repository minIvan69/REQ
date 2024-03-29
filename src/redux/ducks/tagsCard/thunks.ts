import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../../services/http";
import { AxiosResponse } from "axios";
import { TagsItem, TagsItemRes } from "./types";

export const getListProposalTags = createAsyncThunk(
  "/proposal/get-list-tagsCard",
  async () => {
    const { data }: AxiosResponse = await http.post("/proposal/get-list", {
      limit: 0,
      offset: 0,
    });

    console.log("/proposal/get-list-tagsCard", data);

    return data;
  }
);

export const deleteTags = createAsyncThunk(
  "/telegram/delete",
  async (keyId: number) => {
    console.log("/telegram/delete", keyId);

    const { data }: AxiosResponse = await http.delete("/telegram/delete", {
      data: { id: keyId },
    });

    console.log("/telegram/delete", data);
  }
);

export const updatesTagsProposal = createAsyncThunk(
  "/proposal/update-tags",
  async (item: TagsItemRes) => {
    console.log("/proposal/update-tags_________________", item);

    const { data }: AxiosResponse = await http.put("/proposal/update", {
      id: item.id,
      zametki: item.zametki !== "" ? item.zametki : "пустой",
    });
    console.log("/proposal/update-tags", data);

    // console.log("/proposal/delete", id);

    return data;
  }
);

export const updateProposal = createAsyncThunk(
  "/proposal/update",
  async (item: { id: number; status: string }) => {
    const { data }: AxiosResponse = await http.put("/proposal/update", item);

    // return data;
  }
);
