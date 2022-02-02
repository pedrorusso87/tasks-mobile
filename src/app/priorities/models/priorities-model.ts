export class PrioritiesResponse {
  priorities: Priority[];
}

export class Priority {
  id: string;
  description: string;
}

//Priorities State models
export class PrioritiesState {
  pending: boolean;
  error: null;
  priorities: PrioritiesResponse;
}
